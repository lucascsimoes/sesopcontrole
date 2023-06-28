import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './styles/globalStyles';
import { theme } from './styles/theme';

import Navigation from './components/Navigation/Navigation';
import PageNotFound from './components/PageNotFound/PageNotFound';

import Inicio from './views/Inicio/Inicio';

import Videos from './views/Videos/Videos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Navigation/>

      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/systems/videos' element={<Videos/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>

      <GlobalStyle/>
    </ThemeProvider>
  </BrowserRouter>
);

reportWebVitals();
