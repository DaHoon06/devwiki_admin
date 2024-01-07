import styled from 'styled-components';

export const CardLayout = styled.aside`
  background-color: ${({ theme }) => theme.colors.bg.card};
  border: 1px solid ${({ theme }) => theme.colors.BORDER_COLOR};
  border-radius: 4px;
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: auto;
  overflow: auto;
`;

export const CardLabel = styled.div`
  padding: 1em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.BORDER_COLOR};
  background-color: ${({ theme }) => theme.colors.bg.card_label};
`;

export const CardBody = styled.div<{ height: number | unknown }>`
  height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
  padding: 1em;
  background-color: transparent;
  ${({ theme }) => theme.scroll.theme()};
`;
