import styled from 'styled-components';

export const MenuBox = styled.ul``;
export const MenuItems = styled.li`
  .menu-label {
    height: 40px;
    display: flex;
    align-items: center;
  }
`;
export const MenuLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25em 1em;
  position: relative;
  text-align: center;

  &:before {
    content: '';
    display: block;
    position: absolute;
    bottom: -1px;
    left: 50%;
    width: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.PRIMARY};
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    -webkit-transition: width 0.15s ease-in-out;
    transition: width 0.15s ease-in-out;
  }

  &:hover:before {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
    background: #f6f6f6;
  }
`;
export const DropdownLists = styled.ul`
  width: 100%;

  padding: 0.5em 0;
  background-color: #f9f9f9;
`;
export const DropdownItems = styled.li`
  padding: 1em;
  display: flex;
  align-items: center;
  width: 90%;

  &:hover {
    border-radius: 0 10px 10px 0;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.PRIMARY};
    span {
      color: ${({ theme }) => theme.colors.WHITE};
    }
  }
`;
