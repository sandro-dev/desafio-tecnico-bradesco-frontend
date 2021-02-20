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
  timestamp: string;
  from: string;
  to: string;
  text: string;
  id: string;
  conversationId: string;
}

interface ChatContextData {
  addMessage(message: Omit<ChatMessage, 'id'>): Promise<void>;
  hideChat(id: string): void;
}

const ChatContext = createContext<ChatContextData>({} as ChatContextData);

const ChatProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    async function loadChat() {
      const response = await api.get('/messages', {
        params: {
          conversationId: '36b347a0-ea45-40a8-a958-069fc6364498',
        },
      });
      console.log('loadChat messages ==> ', response.data);

      setMessages(response.data);
    }
    loadChat();
  }, []);

  const addMessage = useCallback(
    async ({
      conversationId,
      timestamp,
      from,
      to,
      text,
    }: Omit<ChatMessage, 'id'>) => {
      const id = uuid();

      const newMessage = {
        id,
        conversationId,
        timestamp,
        from,
        to,
        text,
      };

      const response = await api.post('/messages', newMessage);
      console.log('newMessage', response.data);

      setMessages(state => [...state, response.data]);
    },
    [],
  );

  const hideChat = useCallback((id: string) => {
    console.log(`hide chat ${id}`);
  }, []);

  return (
    <ChatContext.Provider value={{ addMessage, hideChat }}>
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
