import React from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
import bot from '../../assets/bot-1.svg';

import { Container, Header, Content, Footer } from './styles';

const Chat: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={bot} alt="bot" />
      </Header>
      <Content>messages...</Content>
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
