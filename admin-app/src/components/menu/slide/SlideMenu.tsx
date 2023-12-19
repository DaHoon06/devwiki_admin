import { Button } from '@components/common/Button';
import { AnimatePresence } from 'framer-motion';
import { ReactElement, useEffect, useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { MenuLists } from '../item/MenuLists';
import { menuLists } from '@config/menuLink';
import * as S from './style';
import useMenuHook from '@hooks/useMenuHook';

export const SlideMenu = (props: any): ReactElement => {
  const { isOpen, ele } = props;
  const { onRequestClose, outerClickEvent } = useMenuHook(ele);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

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
              <Button
                onClick={onRequestClose}
                type="button"
                variant="icon"
                aria-label="slide-menu-close-button"
              >
                <FiLogIn size={22} color={'#fff'} />
              </Button>
            </S.ButtonWrapper>
            <div>
              <div>전다훈 님</div>
              <div>로그아웃</div>
            </div>
            <hr />
            <MenuLists dropdownLists={menuLists} />
          </S.SideMenuBody>
        </S.SideMenuContainer>
      )}
    </AnimatePresence>
  );
};
