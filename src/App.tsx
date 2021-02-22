import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';

import { SessionProvider } from './hooks/Session';
import { ChatProvider } from './hooks/Chat';

import Globalstyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <SessionProvider>
          <ChatProvider>
            <Header />
            <Routes />
          </ChatProvider>
        </SessionProvider>
      </BrowserRouter>
      <Globalstyle />
    </>
  );
};

export default App;
