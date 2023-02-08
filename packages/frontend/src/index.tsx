import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@store';
import { AppThemeProvider, AppRouterProvider } from '@providers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <AppRouterProvider />
      </AppThemeProvider>
    </Provider>
  </React.StrictMode>,
);
