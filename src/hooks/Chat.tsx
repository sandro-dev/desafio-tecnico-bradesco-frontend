import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react';
import { v4 as uuid } from 'uuid';

import Chat from '../components/Chat';
import api from '../services/api';

export interface ChatMessage {
  conversationId: string;
  id: string;
  from: string;
  to: string;
  text: string;
}

interface ChatContextData {
  addMessage(message: Omit<ChatMessage, 'id'>): Promise<void>;
  toggleChat(isClosed: boolean): void;
  loading?: boolean;
}

const ChatContext = createContext<ChatContextData>({} as ChatContextData);

const ChatProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(true);

  const addMessage = useCallback(
    async ({ conversationId, from, to, text }: Omit<ChatMessage, 'id'>) => {
      const newMessage = { id: uuid(), conversationId, from, to, text };

      const response = await api.post('/messages', newMessage);
      setMessages(state => [...state, response.data]);
    },
    [],
  );

  const toggleChat = useCallback((isClosed: boolean) => {
    localStorage.setItem('@ChatBradesco:chatIsClosed', String(isClosed));
  }, []);

  useEffect(() => {
    const conversationId = localStorage.getItem('@ChatBradesco:conversationId');

    async function loadChat() {
      const response = await api.get('/messages', {
        params: { conversationId },
      });
      setMessages(response.data);
    }

    // if conversationId, loadMessage
    if (conversationId) {
      loadChat();
    }
    setLoading(false);
  }, []);

  return (
    <ChatContext.Provider value={{ addMessage, loading, toggleChat }}>
      {children}
      <Chat messages={messages} />
    </ChatContext.Provider>
  );
};

function useChat(): ChatContextData {
  const context = useContext(ChatContext);

  return context;
}
export { ChatProvider, useChat };
