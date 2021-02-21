import React from 'react';
import { FaSpinner } from 'react-icons/fa';

import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <FaSpinner color="#c30826" size={32} />
      Carregando...
    </Container>
  );
};

export default Loading;
