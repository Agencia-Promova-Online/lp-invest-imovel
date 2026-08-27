import React from 'react';
import ReactDOM from 'react-dom/client';
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import RoutesApp from './routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RoutesApp/>
  </React.StrictMode>
);

  AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100,
  });