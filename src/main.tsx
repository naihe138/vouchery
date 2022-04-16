import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import AppRouters from './routes';
import './index.css';
import '~/styles/reset.scss';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <AppRouters />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);
