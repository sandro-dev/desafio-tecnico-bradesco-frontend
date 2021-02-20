import React from 'react';

import { Container, Content } from './styles';

const SeguroResidencial: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Seguro Residencial</h1>
        <p>
          É um seguro abrangente, flexível, e custa menos do que você imagina
          Você assegura sua residência habitual, construída em alvenaria,
          própria ou alugada, com uma série de coberturas, além de contar com
          uma extensa rede de assistência. E nem é preciso fazer vistoria do
          imóvel.
        </p>
      </Content>
    </Container>
  );
};

export default SeguroResidencial;
