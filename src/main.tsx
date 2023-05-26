import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { Provider } from 'react-redux';
import store from "./redux/index";
import { Routes } from './routes/Routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
)
