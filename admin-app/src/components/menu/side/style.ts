import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SideMenuContainer = styled(motion.aside)`
  width: 220px;
  height: calc(100% - 60px);
  background-color: ${({ theme }) => theme.colors.bg.side_primary};
  border-right: 0.5px solid;
  border-color: ${({ theme }) => theme.colors.GRAY_500};
  border-radius: 0 0 0 2px;
  position: fixed;
  left: 0;
  top: 60px;
`;

export const SideMenuBody = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

export const SideMenuTop = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25em;
  justify-content: flex-start;
  column-gap: 0.5em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY_500};
`;

export const SideMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 60px);
`;

export const DarkModeOptionBox = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
  border-top: 1px solid ${({ theme }) => theme.colors.GRAY_500};
`;
