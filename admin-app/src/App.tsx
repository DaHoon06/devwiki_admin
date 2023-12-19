import { RouterProvider } from 'react-router';
import { router } from './routes';
import { useEffect } from 'react';

const App = () => {
  /**@description theme check  */
  useEffect(() => {
    document.body.dataset.theme =
      window.localStorage.getItem('theme') ||
      (window.matchMedia?.('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light');
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
