import React, {
  FormEvent,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
import { FiMaximize2, FiMinus } from 'react-icons/fi';

import { ChatMessage, useChat } from '../../hooks/Chat';
import Loading from '../Loading';
import MessageSpeech from './Message';

import bot from '../../assets/bot-1.svg';
import { Container, Header, Content, Footer } from './styles';

interface MessageProps {
  messages?: ChatMessage[];
}

const icons = {
  maximize: <FiMaximize2 size={16} color="#c30826" />,
  minimize: <FiMinus size={16} color="#c30826" />,
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

  const { addMessage, chatProps, loading, toggleChat } = useChat();

  async function handleAddMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = inputRef.current?.value;
    if (!message) return;

    await addMessage({
      conversationId: chatProps.conversationId,
      from: chatProps.userId,
      to: chatProps.botId,
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

  return (
    <Container isClosed={isClosed}>
      <Header isClosed={isClosed}>
        <img src={bot} alt="bot" />
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
