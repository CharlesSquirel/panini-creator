import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AnimationContextProvider } from './services/context/AnimationContext.tsx';

const rootElement: HTMLElement | null = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AnimationContextProvider>
        <App />
      </AnimationContextProvider>
    </React.StrictMode>
  );
}
