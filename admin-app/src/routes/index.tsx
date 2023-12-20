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
import {QuizPost} from "@components/boards/QuizPost";

/**@description 권한 검사 모듈 */
const AuthRoute = (): ReactElement => {
  const { user } = useAuth();
  // if (!user) return <Navigate to={'/sign-in'} replace />;
  return <Outlet />;
};

const LoginCheckRoute = (): ReactElement => {
  const { user } = useAuth();
  // if (user) return <Navigate to={'/'} replace />;
  return <Outlet />;
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<LoginCheckRoute />}>
        <Route element={<Navigate to={'/sign-in'} />} />
        <Route element={<SigninPage />} path={'/sign-in'} />
      </Route>
      <Route element={<AuthRoute />}>
        <Route element={<Layout />}>
          <Route element={<DashboardPage />} path={'/'}>
            <Route index element={<DashboardIndex />} />
            <Route path={'mollrang'}>
              <Route element={<QuizContainer />} path={'quiz'} />
              <Route element={<QuizContainer />} path={'quiz/:postId'} />
              <Route element={<QuizPost />} path={'quiz/post'} />
            </Route>
            <Route path={'schedule'} element={<SchedulePage />} />
          </Route>
        </Route>
      </Route>
    </>
  )
);
