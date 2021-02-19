import React from 'react';

import { Container, Content } from './styles';

import Header from '../../components/Header';

const About: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <h1>Sobre</h1>
        <p>
          Esta é uma aplicação front-end feita em ReactJS para o desafio técnico
          Bradesco Seguros
        </p>
      </Content>
    </Container>
  );
};

export default About;
