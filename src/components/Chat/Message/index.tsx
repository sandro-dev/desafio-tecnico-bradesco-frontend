import React from 'react';

import { Container, Content } from './styles';

interface MessageData {
  key: string;
  text: string;
}

const Message: React.FC<MessageData> = ({ key, text }) => {
  return (
    <Container>
      <Content>
        <div key={key} className="message speech-right">
          {text}
        </div>
        <div key={key} className="message speech-left">
          {text}
        </div>
      </Content>
    </Container>
  );
};

export default Message;
