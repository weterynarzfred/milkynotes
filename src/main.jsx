import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './scss/index.scss';
import App from './components/App.jsx';
import StateProvider from "./components/StateProvider";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </StrictMode>,
);
