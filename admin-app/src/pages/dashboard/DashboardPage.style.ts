import styled from 'styled-components';

export const DashboardPageLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const DashboardBody = styled.div`
  width: 100%;
  height: 100%;

  ${({ theme }) => theme.media.tablet} {
    width: 100%;
  }
`;