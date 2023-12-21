import { Button } from '@components/common/Button';
import { AnimatePresence } from 'framer-motion';
import { ReactElement, useEffect, useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { MenuLists } from '../item/MenuLists';
import { menuLists } from '@config/menuLink';
import * as S from './style';
import useMenuHook from '@hooks/useMenuHook';
import { RiFunctionFill } from 'react-icons/ri';
import { Typography } from '@components/common/Typography';
import useTheme from '@hooks/useTheme';
import { ToggleSwitchButton } from '@components/common/buttons/toggle/ToggleSwitch';
import { User } from '@components/layouts/Header';

export const SlideMenu = (props: any): ReactElement => {
  const { isOpen, ele } = props;
  const { onRequestClose, outerClickEvent } = useMenuHook(ele);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const { toggleTheme, isDarkMode } = useTheme();
  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeListener);
  });

  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      isOpen ? (html.style.overflow = 'hidden') : (html.style.overflow = '');
    }
  }, [isOpen]);

  const onResizeClose = () => {
    if (innerWidth <= 769) {
      onRequestClose();
    }
  };

  useEffect(() => {
    onResizeClose();
  }, [innerWidth]);

  return (
    <AnimatePresence>
      {isOpen && (
        <S.SideMenuContainer
          onClick={outerClickEvent}
          key={'side-nav-key'}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <S.SideMenuBody
            initial={{ opacity: 1, x: 700 }}
            transition={{ ease: [0.17, 0.67, 0.83, 1] }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: 700,
            }}
            ref={ele}
          >
            <S.ButtonWrapper>
              <div>
                <RiFunctionFill
                  color={isDarkMode ? '#fff' : '#222'}
                  size={20}
                />
                <Typography as="span" $color="textDefault" $weight={'bold'}>
                  데브위키
                </Typography>
              </div>
              <Button
                onClick={onRequestClose}
                type="button"
                variant="icon"
                aria-label="slide-menu-close-button"
              >
                <FiLogIn size={22} color={isDarkMode ? '#fff' : '#222'} />
              </Button>
            </S.ButtonWrapper>

            <div>
              <User />
            </div>
            <hr />
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
