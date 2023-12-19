import styled from 'styled-components';

export const MainContainer = styled.main`
  background-color: #f5f5f8;
  padding: 2em;
  width: calc(100% - 220px);
  margin-top: 60px;
  margin-left: 220px;
  overflow: auto;
  min-height: 100vh;

  ${({ theme }) => theme.media.tablet} {
    width: 100%;
    margin-left: 0;
  }
`;

export const HeaderLayout = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.GRAY_500};
  background-color: ${({ theme }) => theme.colors.bg.primary};
  box-shadow: 0 1px 3px 0 rgba(100, 100, 100, 0.1);
  z-index: 10;

  .header-items-box {
    display: flex;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 1em;
  justify-content: space-between;

  .hamburger-button {
    display: none;
  }

  ${({ theme }) => theme.media.tablet} {
    & {
      justify-content: space-between;
    }

    .hamburger-button {
      display: inline-block;
    }

    .header-items-box {
      display: none !important;
    }
  }
`;
