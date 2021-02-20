import React, { FormEvent, useState, useRef } from 'react';
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

  const { addMessage } = useChat();

  async function handleAddMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = inputRef.current?.value;
    if (!message) return;

    await addMessage({
      timestamp: '2021-02-19T01:38:02.000Z',
      from: '57bee750-4842-406d-b91a-7535e7ea6d0f',
      to: 'e645961f-e0bc-4eda-9d8f-4df3224c405f',
      conversationId: '36b347a0-ea45-40a8-a958-069fc6364498',
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
          messages.map(msg => <MessageSpeech key={msg.id} text={msg.text} />)
        ) : (
          <p>loading...</p>
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
