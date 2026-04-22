import React from 'react';
import ReactDOM from 'react-dom/client';
import '@shared/i18n/i18n';

import App from '@app/App';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
