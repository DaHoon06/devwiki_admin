import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SideMenuContainer = styled(motion.aside)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const SideMenuBody = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
  border-color: ${({ theme }) => theme.colors.GRAY_500};
  height: 100%;
  width: 50vw;
  max-width: 200px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1em;
  
  .logo_name {
    display: flex;
    align-items: center;
    column-gap: 0.3em;
    
  }
`;

export const UserProfileContainer = styled.div`
  padding: 1em;
`;

export const SideMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 170px);
`;

export const DarkModeOptionBox = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
  border-top: 1px solid ${({ theme }) => theme.colors.GRAY_500};
`;
