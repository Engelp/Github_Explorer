import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Globalstyles from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <Globalstyles />
  </>
);

export default App;
