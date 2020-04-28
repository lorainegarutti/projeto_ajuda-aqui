import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import Routes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes />
      </Main>
      <Footer />
    </BrowserRouter>
  )
}
