import React, {
  FormEvent,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
import { FiMaximize2, FiMinimize2 } from 'react-icons/fi';

import { useSession } from '../../hooks/Session';
import { ChatMessage, useChat } from '../../hooks/Chat';

import Loading from '../Loading';
import MessageSpeech from './Message';

import botImage from '../../assets/bot-1.svg';
import { Container, Header, Content, Footer } from './styles';

interface MessageProps {
  messages?: ChatMessage[];
}

const icons = {
  maximize: <FiMaximize2 size={22} color="#fff" />,
  minimize: <FiMinimize2 size={22} color="#fff" />,
};

const Chat: React.FC<MessageProps> = ({ messages = [] }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLInputElement>(null);

  const [isClosed, setIsClosed] = useState<boolean>(true);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const { addMessage, loading, toggleChat } = useChat();
  const { sessionData } = useSession();

  async function handleAddMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = inputRef.current?.value;
    if (!message) return;

    await addMessage({
      conversationId: sessionData.conversationId,
      from: sessionData.userId,
      to: sessionData.botId,
      text: message,
    });

    formRef.current?.reset();

    scrollToBottom();
  }

  const handleToggleChat = useCallback(() => {
    setIsClosed(!isClosed);
    toggleChat(!isClosed);
  }, [isClosed, toggleChat]);

  useEffect(() => {
    if (!isClosed) {
      scrollToBottom();
    }
  }, [isClosed]);

  useEffect(() => {
    const { conversationId, botId, botName, userId } = sessionData;

    setTimeout(() => {
      setIsClosed(false);
    }, 3000);

    if (conversationId) {
      if (!localStorage.getItem('@ChatBradesco:chatStarted')) {
        setTimeout(() => {
          addMessage({
            conversationId,
            from: botId,
            to: userId,
            text: `Olá, tudo bem? Eu me chamo ${botName}. Posso te ajudar?`,
          });
        }, 5000);

        localStorage.setItem('@ChatBradesco:chatStarted', 'true');
      }
    }
  }, [sessionData, addMessage]);

  return (
    <Container isClosed={isClosed}>
      <Header isClosed={isClosed}>
        <img src={botImage} alt="bot" />
        <button type="button" onClick={handleToggleChat}>
          {isClosed ? icons.maximize : icons.minimize}
        </button>
      </Header>
      <Content isClosed={isClosed}>
        {loading ? (
          <Loading />
        ) : (
          messages.map(msg => (
            <MessageSpeech key={msg.id} text={msg.text} from={msg.from} />
          ))
        )}
        <div ref={messagesEndRef} />
      </Content>
      <Footer isClosed={isClosed}>
        <form onSubmit={handleAddMessage} ref={formRef}>
          <input
            type="text"
            ref={inputRef}
            placeholder="Digite sua mensagem ..."
          />

          <button type="submit">
            <RiSendPlaneFill size={32} color="#999" />
          </button>
        </form>
      </Footer>
    </Container>
  );
};

export default Chat;
