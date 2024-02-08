import { RouterProvider } from 'react-router';
import { router } from './routes';
import { useEffect } from 'react';

const App = () => {
  const screenSizeCheck = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`); //"--vh"라는 속성으로 정의해준다.
  }

  const themeCheck = () => {
    document.body.dataset.theme =
    window.localStorage.getItem('theme') ||
    (window.matchMedia?.('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light');
  }

  useEffect(() => {
    themeCheck();
    window.addEventListener('resize', () => screenSizeCheck());
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
