import { ReactElement, useRef } from 'react';
import { Outlet } from 'react-router';
import { Header } from './Header';
import { MainContainer } from '@components/layouts/style';
import { SlideMenu } from '@components/menu/slide/SlideMenu';
import { SideMenu } from '@components/menu/side/SideMenu';
import { useAppSelector } from '@hooks/useRedux';
import { ModalContainer } from '@containers/ModalContainer';

export const Layout = (): ReactElement => {
  const { sideMenuIsOpen } = useAppSelector((state) => state.utilityStore);
  const ele = useRef<HTMLDivElement>(null);

  return (
    <>
      <SlideMenu isOpen={sideMenuIsOpen} ele={ele} />
      <Header />
      <SideMenu />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <ModalContainer />
    </>
  );
};
