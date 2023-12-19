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
  background: #1a283e;
  height: 100%;
  width: 50vw;
  max-width: 200px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1em;
`;
