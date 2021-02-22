import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react';
import { v4 as uuid } from 'uuid';

import api from '../services/api';

interface SessionDTO {
  conversationId: string;
  userId: string;
  botId: string;
  botName: string;
}

interface SessionContextData {
  sessionData: SessionDTO;
}

const SessionContext = createContext<SessionContextData>(
  {} as SessionContextData,
);

const SessionProvider: React.FC = ({ children }) => {
  const [sessionData, setSessionData] = useState<SessionDTO>(() => {
    //
    const conversationId = localStorage.getItem('@ChatBradesco:conversationId');
    const userId = localStorage.getItem('@ChatBradesco:userId');
    const botId = localStorage.getItem('@ChatBradesco:botId');
    const botName = localStorage.getItem('@ChatBradesco:botName');

    // if already exists on localStorage, return data
    if (conversationId && userId && botId && botName) {
      return { conversationId, userId, botId, botName };
    }
    // if not exists, return empty object
    return {} as SessionDTO;
  });

  const persistData = useCallback(
    ({ conversationId, userId, botId, botName }: SessionDTO) => {
      localStorage.setItem('@ChatBradesco:conversationId', conversationId);
      localStorage.setItem('@ChatBradesco:userId', userId);
      localStorage.setItem('@ChatBradesco:botId', botId);
      localStorage.setItem('@ChatBradesco:botName', botName);

      // set expiresIn
      const date = new Date();
      date.setHours(date.getHours() + 1);
      localStorage.setItem('@ChatBradesco:expiresIn', String(date.getTime()));
    },
    [],
  );

  const removeKeyFromLocalStorage = useCallback((keysToRemove: string[]) => {
    keysToRemove.forEach(key => {
      localStorage.removeItem(`@ChatBradesco:${key}`);
    });
  }, []);

  const initSession = useCallback(async () => {
    // if don't have a conversation id
    if (!sessionData.conversationId) {
      const response = await api.get('bots');
      const results = response.data;
      // select a random bot

      const randomIndex = [Math.floor(Math.random() * results.length)];
      const randomBot = results[`${randomIndex}`];
      const { id, name } = randomBot;

      // defining other variables
      const conversationId = uuid();
      const userId = uuid();

      setSessionData({ conversationId, botId: id, botName: name, userId });
      persistData({ conversationId, botId: id, botName: name, userId });
    }
  }, [sessionData.conversationId, persistData]);

  useEffect(() => {
    const expiresIn = localStorage.getItem('@ChatBradesco:expiresIn');
    if (expiresIn) {
      // verify is session expired
      if (Date.now() > Number(expiresIn)) {
        removeKeyFromLocalStorage([
          'conversationId',
          'botId',
          'userId',
          'expiresIn',
          'chatIsClosed',
        ]);

        // reinitializing session
        initSession();
      }
    } else {
      // if does not exists expiresIn, let's initialize the session
      initSession();
    }
  }, [
    sessionData.conversationId,
    initSession,
    removeKeyFromLocalStorage,
    persistData,
  ]);

  return (
    <SessionContext.Provider value={{ sessionData }}>
      {children}
    </SessionContext.Provider>
  );
};

function useSession(): SessionContextData {
  const context = useContext(SessionContext);

  return context;
}
export { SessionProvider, useSession };
