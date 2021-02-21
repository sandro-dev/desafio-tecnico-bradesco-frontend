import React from 'react';

import { useChat } from '../../../hooks/Chat';

import { Container } from './styles';

interface MessageProps {
  from: string;
  text: string;
}

const Message: React.FC<MessageProps> = ({ text, from }) => {
  const { chatProps } = useChat();

  const direction = from === chatProps.userId ? 'right' : 'left';

  return (
    <Container>
      <div className={`message-${direction} speech-${direction}`}>{text}</div>
    </Container>
  );
};

export default Message;
