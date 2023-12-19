import { ReactElement } from 'react';
import { Outlet } from 'react-router';
import * as S from './DashboardPage.style';

export const DashboardPage = (): ReactElement => {
  return (
    <S.DashboardPageLayout>
      <S.DashboardBody>
        <Outlet />
      </S.DashboardBody>
    </S.DashboardPageLayout>
  );
};
