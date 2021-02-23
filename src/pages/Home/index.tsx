import React from 'react';
import { IoChatbubblesOutline } from 'react-icons/io5';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Produtos Bradesco Seguros</h1>
        <p>
          Bradesco Seguros é a maior empresa seguradora do Brasil e que pertence
          ao Banco Bradesco. Atua de forma multilinha- segmentos de seguros,
          capitalização e previdência complementar aberta- e possui mais de 200
          dependências.
        </p>
        <p>
          Conte com a proteção da Bradesco Seguros, a maior seguradora do país,
          a serviço dos seus negócios. Seguros de vida, auto, patrimoniais e de
          saúde para proteger tudo o que é importante para você e para a sua
          empresa. Segurança e tranquilidade para você e seus funcionários.
          Produtividade para a sua empresa.
        </p>

        <br />
        <br />
        <h2>Seguro Auto</h2>
        <p>
          O Bradesco Seguro Auto oferece coberturas básicas e adicionais, além
          de serviços que proporcionam conforto e segurança para você e sua
          família. Veja algumas: Reboque Assistência Auto Dia e Noite com
          diversas opções de limites de quilometragens Pagamento Escolha o
          melhor dia para seu pagamento Carro Reserva Três opções de diárias: 7,
          15 ou 30
        </p>
        <br />
        <h2>Seguro Residencial</h2>
        <p>
          É um seguro abrangente, flexível, e custa menos do que você imagina
          Você assegura sua residência habitual, construída em alvenaria,
          própria ou alugada, com uma série de coberturas, além de contar com
          uma extensa rede de assistência. E nem é preciso fazer vistoria do
          imóvel.
        </p>
        <br />

        <h2>Seguro Viagem</h2>
        <p>
          Seguro Viagem Bradesco garante sua proteção e proporciona muito mais
          tranquilidade em suas viagens de trabalho e lazer. Além de conforto de
          um pacote de benefícios.
        </p>
        <br />
      </Content>
    </Container>
  );
};

export default Home;
