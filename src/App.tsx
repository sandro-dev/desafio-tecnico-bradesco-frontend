import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Chat from './components/Chat';
import Header from './components/Header';

import Globalstyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
      <Chat />
      <Globalstyle />
    </>
  );
};

export default App;
