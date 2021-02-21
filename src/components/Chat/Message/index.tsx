import React from 'react';

import { useChat } from '../../../hooks/Chat';

import { Container, Content } from './styles';

interface MessageProps {
  from: string;
  text: string;
}

const Message: React.FC<MessageProps> = ({ text, from }) => {
  const { chatProps } = useChat();

  const direction = from === chatProps.userId ? 'speech-right' : 'speech-left';

  return (
    <Container>
      <Content>
        <div className={`message ${direction}`}>{text}</div>
      </Content>
    </Container>
  );
};

export default Message;
