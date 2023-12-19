import styled from 'styled-components';

export const Button = styled.button`
  width: 15em;
  height: 3.5em;
  padding: 0.40625rem 0;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(95%);
  }

  &.primary {
    background-color: #222;

    span {
      color: #fff;
    }
  }
  &:disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.colors.GRAY_500};
    span {
      color: var(--textGray200);
    }
  }
  &.secondary {
    border-color: ${({ theme }) => theme.colors.GRAY_500};
    background-color: #f0f0f0;

    span {
      color: #a4a4a4;
    }
  }

  &.primary-rounded {
    background-color: var(--primary);
    border-radius: 50px;

    span {
      color: var(--white);
    }
  }

  &.icon {
    background-color: transparent;
    width: fit-content;
    height: auto;
    box-shadow: inherit;
    padding: 0;
  }
`;
