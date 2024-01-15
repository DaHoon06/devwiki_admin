import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@components/common/Button';
import { ReactElement, useEffect, useState } from 'react';
import { HeaderLayout, HeaderBox } from '@components/layouts/style';
import styled from 'styled-components';
import { FiAlignJustify } from 'react-icons/fi';
import useLocalStorage from '@hooks/useLocalStorage';
import { useAppDispatch, useAppSelector } from '@hooks/useRedux';
import { setSideBarIsOpen } from '@store/slices/utilitySlces';
import { RiAccountCircleFill } from 'react-icons/ri';
import { IoLogOut } from 'react-icons/io5';
import { Typography } from '@components/common/Typography';
import { useAuth } from '@providers/authProvider';
import { LogoIcon } from '@components/common/icons/Logo';

const Logo = styled.div`
  a {
    display: inline-block;
    width: 70px;
    height: 100%;
  }

  @media screen and (max-width: 769px) {
  }
`;
export const Header = () => {
  const dispatch = useAppDispatch();
  const { sideMenuIsOpen } = useAppSelector((state) => state.utilityStore);
  const onClickHandler = () => {
    dispatch(setSideBarIsOpen(!sideMenuIsOpen));
  };

  return (
    <HeaderLayout>
      <HeaderBox>
        <Logo>
          <Link to="/">
            <LogoIcon />
          </Link>
        </Logo>
        <div>
          <User />
          <Button
            className="hamburger-button"
            variant="icon"
            type="button"
            aria-label="hamburger-button"
            onClick={onClickHandler}
          >
            <FiAlignJustify size={24} color={'var(--bg_default)'} />
          </Button>
        </div>
      </HeaderBox>
    </HeaderLayout>
  );
};

const ProfileBox = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 0.3em;
  justify-content: space-between;
`;
const ProfileLayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const User = (): ReactElement => {
  const [userName, setUserName] = useState('데브위키');
  const { signOut } = useAuth();

  const { getStorageItems } = useLocalStorage<{
    accessToken: string;
    name: string;
  }>();
  const navigate = useNavigate();
  const user = { name: '데브위키' };

  useEffect(() => {
    if (user && user.name) setUserName(user.name);
  }, [user]);

  const logout = () => {
    signOut();
    navigate('/');
  };
  /**
   * @todo 유저 클릭 시 드랍 다운으로 로그아웃 기능 넣기
   */
  return (
    <ProfileBox className={'header-items-box'}>
      <ProfileLayer>
        <RiAccountCircleFill size={30} color={'#bdbdbd'} />
        <Typography $color={'textDefault'} as={'span'} $variant={'caption'}>
          {userName}
        </Typography>
      </ProfileLayer>

      <button onClick={logout} type="button">
        <Typography $color={'textDefault'} as={'span'} $variant={'caption'}>
          로그아웃
        </Typography>
      </button>
    </ProfileBox>
  );
};
