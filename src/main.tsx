import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import AppRouters from './routes';
import '~/styles/reset.scss';
import theme from './theme/index';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <AppRouters />
        </BrowserRouter>
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);
