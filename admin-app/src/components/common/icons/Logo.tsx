import { ReactComponent as Logo } from '@assets/images/logo.svg';
import styled from 'styled-components';

export const LogoIcon = styled(Logo)`
  width: 100%;
  height: 100%;

  path:nth-child(1) {
    fill: var(--logo_color);
  }
`;
