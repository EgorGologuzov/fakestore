import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CartContextProvider } from './hooks/useCart';
import { ThemeContextProvider } from './hooks/useTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </ThemeContextProvider>
);
