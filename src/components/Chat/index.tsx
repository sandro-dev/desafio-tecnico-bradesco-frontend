import React, { useEffect, useState } from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';

import bot from '../../assets/bot-1.svg';
import api from '../../services/api';

import MessageSpeech from './Message';

import { Container, Header, Content, Footer } from './styles';

interface Message {
  timestamp: string;
  from: string;
  to: string;
  text: string;
  id: string;
  conversationId: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    async function loadBots() {
      const response = await api.get('/messages', {
        params: {
          conversationId: '36b347a0-ea45-40a8-a958-069fc6364498',
        },
      });
      setMessages(response.data);
    }
    loadBots();
  }, []);

  return (
    <Container>
      <Header>
        <img src={bot} alt="bot" />
      </Header>
      <Content>
        {messages.length > 0 ? (
          messages.map(message => (
            <MessageSpeech key={message.id} text={message.text} />
          ))
        ) : (
          <p>loading...</p>
        )}
      </Content>
      <Footer>
        <textarea
          name="insert-message"
          id="insert-message"
          cols={Number(300)}
          rows={Number(2)}
          placeholder="Digite sua mensagem"
        />
        <button type="button">
          <RiSendPlaneFill size={26} color="#fff" />
        </button>
      </Footer>
    </Container>
  );
};

export default Chat;
