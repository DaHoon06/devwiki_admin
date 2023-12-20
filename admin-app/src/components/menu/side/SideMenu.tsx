import { ReactElement, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import * as S from './style';
import { MenuLists } from '../item/MenuLists';
import { menuLists } from '@config/menuLink';
import { Typography } from '@components/common/Typography';
import { RiFunctionFill } from 'react-icons/ri';
import { ToggleSwitchButton } from '@components/common/buttons/toggle/ToggleSwitch';
import useTheme from '@hooks/useTheme';

export const SideMenu = (): ReactElement => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [hideMenu, setHideMenu] = useState(false);
  const { toggleTheme, isDarkMode } = useTheme();

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeListener);
  });

  const onResizeClose = (): void => {
    setHideMenu(innerWidth <= 769);
  };
  useEffect(() => {
    onResizeClose();
  }, [innerWidth]);

  return (
    <AnimatePresence>
      {!hideMenu && (
        <S.SideMenuContainer
          key={'side-menu-key'}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <S.SideMenuBody
            initial={{ opacity: 1, x: 0 }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -10,
            }}
          >
            <S.SideMenuTop>
              <RiFunctionFill color={isDarkMode ? '#fff' : '#222'} size={20} />
              <Typography $variant="body1" $color="textDefault" $weight={'bold'}>
                데브위키
              </Typography>
            </S.SideMenuTop>

            <S.SideMenuBox>
              <div>
                <MenuLists dropdownLists={menuLists} />
              </div>
              <S.DarkModeOptionBox>
                <Typography $variant="body1" $color="textDefault">
                  Dark Mode
                </Typography>
                <ToggleSwitchButton mode={isDarkMode} onClick={toggleTheme} />
              </S.DarkModeOptionBox>
            </S.SideMenuBox>
          </S.SideMenuBody>
        </S.SideMenuContainer>
      )}
    </AnimatePresence>
  );
};
