import styled from 'styled-components';

export const CardLayout = styled.aside`
  background-color: ${({ theme }) => theme.colors.WHITE};
  border: 1px solid ${({ theme }) => theme.colors.GRAY_500};
  border-radius: 4px;
  width: 100%;
  min-width: 400px;
  max-width: 100%;
  height: auto;
  min-height: auto;
  overflow: auto;
`;

export const CardLabel = styled.div`
  padding: 1em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY_500};
`;

export const CardBody = styled.div<{ height: number | unknown }>`
  height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
  padding: 1em;

  ${({ theme }) => theme.scroll.theme()};
`;
