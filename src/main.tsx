import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ReduxStoreProvider } from './stores/redux';
import { MobXStoreProvider } from './stores/mobx';
import { ContextStoreProvider } from './stores/context';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MobXStoreProvider>
      <ReduxStoreProvider>
        <ContextStoreProvider>
          <App />
        </ContextStoreProvider>
      </ReduxStoreProvider>
    </MobXStoreProvider>
  </StrictMode>
);
