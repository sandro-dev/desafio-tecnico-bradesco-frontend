import React from 'react';
import Header from '../../../components/Header';

import { Container, Content } from './styles';

const SeguroViagem: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <h1>Seguro Viagem</h1>
        <p>
          Seguro Viagem Bradesco garante sua proteção e proporciona muito mais
          tranquilidade em suas viagens de trabalho e lazer. Além de conforto de
          um pacote de benefícios.
        </p>
      </Content>
    </Container>
  );
};

export default SeguroViagem;
