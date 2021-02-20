import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';

import { ChatProvider } from './hooks/Chat';

import Globalstyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <ChatProvider>
          <Header />
          <Routes />
        </ChatProvider>
      </BrowserRouter>
      <Globalstyle />
    </>
  );
};

export default App;
