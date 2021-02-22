import React from 'react';

import { useSession } from '../../../hooks/Session';

import { Container } from './styles';

interface MessageProps {
  from: string;
  text: string;
}

const Message: React.FC<MessageProps> = ({ text, from }) => {
  const { sessionData } = useSession();

  const direction = from === sessionData.userId ? 'right' : 'left';

  return (
    <Container>
      <div className={`message-${direction} speech-${direction}`}>{text}</div>
    </Container>
  );
};

export default Message;
