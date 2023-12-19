import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from '@store/index';
import { Provider } from 'react-redux';
import ErrorBoundary from '@utils/error/errorBoundary';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import { GlobalStyle } from '@styles/global-style';
import AuthProvider from '@providers/authProvider';
import { queryClient } from '@libs/Tanstack';
import { QueryClientProvider } from '@tanstack/react-query';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <App />
            </ThemeProvider>
          </Provider>
        </AuthProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
reportWebVitals();
