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

interface ChatDTO {
  conversationId: string;
  userId: string;
  botId: string;
}

interface ChatContextData {
  addMessage(message: Omit<ChatMessage, 'id'>): Promise<void>;
  hideChat(id: string): void;
  chatProps: ChatDTO;
  loading?: boolean;
}

const ChatContext = createContext<ChatContextData>({} as ChatContextData);

const ChatProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(true);

  const [chatProps, setChatProps] = useState<ChatDTO>(() => {
    const conversationId = localStorage.getItem('@ChatBradesco:conversationId');
    const userId = localStorage.getItem('@ChatBradesco:userId');
    const botId = localStorage.getItem('@ChatBradesco:botId');

    // if already exists on localStorage, return data
    if (conversationId && userId && botId) {
      return { conversationId, userId, botId };
    }
    // if not exists, return empty object
    return {} as ChatDTO;
  });

  useEffect(() => {
    async function loadChat() {
      if (chatProps.conversationId) {
        const response = await api.get('/messages', {
          params: { conversationId: chatProps.conversationId },
        });
        setMessages(response.data);
      }
    }

    let expiresIn = localStorage.getItem('@ChatBradesco:expiresIn');

    if (expiresIn) {
      const now = Date.now();
      if (now > Number(expiresIn)) {
        localStorage.clear();
      }
    } else {
      const date = new Date();
      date.setHours(date.getHours() + 1);
      expiresIn = String(date.getTime());
      localStorage.setItem('@ChatBradesco:expiresIn', String(expiresIn));
      console.log('expiresIn =>', expiresIn);
      loadChat();
    }

    setLoading(false);
  }, [chatProps.conversationId]);

  const addMessage = useCallback(
    async ({ conversationId, from, to, text }: Omit<ChatMessage, 'id'>) => {
      const newMessage = { id: uuid(), conversationId, from, to, text };

      const response = await api.post('/messages', newMessage);
      const { conversationId: chatId, from: userId, to: botId } = response.data;

      localStorage.setItem('@ChatBradesco:conversationId', chatId);
      localStorage.setItem('@ChatBradesco:userId', userId);
      localStorage.setItem('@ChatBradesco:botId', botId);

      setChatProps({ conversationId: chatId, userId, botId });
      setMessages(state => [...state, response.data]);
    },
    [],
  );

  const hideChat = useCallback((id: string) => {
    console.log(`hide chat ${id}`);
  }, []);

  return (
    <ChatContext.Provider value={{ addMessage, chatProps, hideChat, loading }}>
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
