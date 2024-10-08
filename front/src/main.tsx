import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import Application from './application/App.tsx';
import { store } from './store/index.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>
);
