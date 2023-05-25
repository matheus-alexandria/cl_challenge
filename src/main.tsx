import React from 'react';
import ReactDOM from 'react-dom/client';
import { SignUp } from './pages/SignUp';
import { MainScreen } from "./pages/MainScreen";
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <SignUp /> */}
    <MainScreen />
  </React.StrictMode>,
)
