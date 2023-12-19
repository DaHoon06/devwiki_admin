import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
} from 'react-router-dom';
import { Layout } from '@components/layouts/Layout';
import { DashboardPage } from '@pages/dashboard/DashboardPage';
import { DashboardIndex } from '@components/dashboard/Dashbord';
import { SigninPage } from '@pages/home/SignInPage';
import { QuizContainer } from '@containers/QuizContainer';
import { useAuth } from '@providers/authProvider';
import { ReactElement } from 'react';
import { SchedulePage } from '@pages/SchedulePage';

/**@description 권한 검사 모듈 */
const AuthRoute = (): ReactElement => {
  const { user } = useAuth();
  if (!user) return <Navigate to={'/'} replace />;
  return <Outlet />;
};

const LoginCheckRoute = (): ReactElement => {
  const { user } = useAuth();
  if (user) return <Navigate to={'/dashboard'} replace />;
  return <Outlet />;
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<LoginCheckRoute />}>
        <Route element={<Navigate to={'/'} />} />
        <Route element={<SigninPage />} path={'/'} />
      </Route>
      <Route element={<AuthRoute />}>
        <Route element={<Layout />}>
          <Route element={<DashboardPage />} path={'dashboard'}>
            <Route index element={<DashboardIndex />} />
            <Route path={'mollrang'}>
              <Route element={<QuizContainer />} path={'quiz'} />
            </Route>
            <Route path={'schedule'} element={<SchedulePage />} />
          </Route>
        </Route>
      </Route>
    </>
  )
);
