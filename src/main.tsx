import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {
  ReduxStoreProvider,
  MobXStoreProvider,
  ContextStoreProvider,
} from './providers';

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
