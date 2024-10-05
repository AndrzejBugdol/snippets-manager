import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';

import './index.css';
import App from './App';
import { RouterProvider } from './context/UseRouterContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </MantineProvider>
  </React.StrictMode>,
);
