import React, { useEffect } from 'react';
import { IoChatbubblesOutline } from 'react-icons/io5';

import api from '../../services/api';

import logo from '../../assets/logo-bradesco-seguros.svg';

import { Container, Header, Content } from './styles';

const Home: React.FC = () => {
  useEffect(() => {
    async function loadBots() {
      const response = await api.get('/bots');
      console.log(response.data);
    }
    loadBots();
  }, []);

  return (
    <Container>
      <Header>
        <img src={logo} alt="Bradesco Seguros" width="30%" />
      </Header>
      <Content>
        <h1>Produtos Bradesco Seguros</h1>
        <h2>Seguro Auto</h2>
        <p>
          O Bradesco Seguro Auto oferece coberturas básicas e adicionais, além
          de serviços que proporcionam conforto e segurança para você e sua
          família. Veja algumas: Reboque Assistência Auto Dia e Noite com
          diversas opções de limites de quilometragens Pagamento Escolha o
          melhor dia para seu pagamento Carro Reserva Três opções de diárias: 7,
          15 ou 30
        </p>
        <h2>Seguro Residencial</h2>
        <p>
          É um seguro abrangente, flexível, e custa menos do que você imagina
          Você assegura sua residência habitual, construída em alvenaria,
          própria ou alugada, com uma série de coberturas, além de contar com
          uma extensa rede de assistência. E nem é preciso fazer vistoria do
          imóvel.
        </p>
        <h2>Seguro Viagem</h2>
        <p>
          Seguro Viagem Bradesco garante sua proteção e proporciona muito mais
          tranquilidade em suas viagens de trabalho e lazer. Além de conforto de
          um pacote de benefícios.
        </p>

        <div>
          <strong>Tire suas dúvidas agora mesmo</strong>
          <button type="button">
            <IoChatbubblesOutline size={64} color="#fff" />
          </button>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
