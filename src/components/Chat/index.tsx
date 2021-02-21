import React, { FormEvent, useRef } from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';

import bot from '../../assets/bot-1.svg';

import { ChatMessage, useChat } from '../../hooks/Chat';
import MessageSpeech from './Message';

import { Container, Header, Content, Footer } from './styles';

interface MessageProps {
  messages?: ChatMessage[];
}

const Chat: React.FC<MessageProps> = ({ messages = [] }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { addMessage, chatProps } = useChat();

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
  }

  return (
    <Container>
      <Header>
        <img src={bot} alt="bot" />
      </Header>
      <Content>
        {messages.length > 0 ? (
          messages.map(msg => (
            <MessageSpeech key={msg.id} text={msg.text} from={msg.from} />
          ))
        ) : (
          <p>carregando chat...</p>
        )}
      </Content>
      <Footer>
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
