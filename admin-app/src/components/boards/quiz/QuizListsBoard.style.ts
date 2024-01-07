import styled from 'styled-components';

export const PaginationLists = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em 0;
  
  .prev_button, .next_button {
    border: 1px solid ${({theme}) => theme.colors.BORDER_COLOR};
    padding: 0.4em 0.6em;
    
    &:disabled {
      color: ${({theme}) => theme.colors.BORDER_COLOR};
    }
  }
  
  .next_button {
    
  }
`;

export const QuizListLayout = styled.div`
  width: 100%;
  height: 100%;
`;

export const QuizHeader = styled.div`
  padding: 1em 0;
  display: flex;
  align-items: center;
  column-gap: 1em;

  button {
    background-color: #ff2b2b !important;
    padding: 1em;
    width: 100px;
    height: 30px;

    &:hover {
      filter: brightness(80%);
    }

    &:disabled {
      background-color: #ff8e8e !important;

      &:hover {
        filter: brightness(100%);
      }

      span {
        color: #e0dbdb;
      }
    }

    span {
      font-size: 1em;
    }
  }
`;
export const QuizBoxOptions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5em;
  
  .options {
    display: flex;
    
    .update_save_button {
      margin-right: 1em;
    }
  }
`;
export const QuizBox = styled.div`
  padding: 1em 0;
  border-top: 1px solid ${({theme}) => theme.colors.BORDER_COLOR};
  border-bottom: 1px solid ${({theme}) => theme.colors.BORDER_COLOR};

  .quiz_title_container {
    input[type='checkbox'] {
      margin-right: 1em;
    }

    input[type='text'] {
      width: 100%;
    }
  }

  label {
    display: flex;
    flex-direction: column;
  }

  &:hover {
    background-color: rgba(152, 152, 152, 0.24);
    cursor: pointer;
    border-radius: 2px;
  }

  &.active {
    background-color: rgba(152, 152, 152, 0.24);
    border-radius: 2px;
  }

  .answer_input_box {
    display: flex;
    justify-content: space-between;
    width: 100%;

    label {
      width: 30%;
    }
  }
`;

export const PaginationItems = styled.li`
  border: 1px solid transparent;
  display: flex;

  &:hover {
    cursor: pointer;
  }

  & button {
    height: 100%;
    color: ${({ theme }) => theme.colors.BORDER_COLOR};

    &.active {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.GRAY_200};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.GRAY_200};
    }
  }
`;

export const HeaderOption = styled.div`
  display: flex;
  justify-content: space-between;

  .add_quiz_anchor_box {
    a {
      display: flex;
      align-items: center;
      text-decoration: none;

      &:hover {
        svg {
          fill: ${({ theme }) => theme.colors.PRIMARY_SOFT};
        }

        .label {
          color: ${({ theme }) => theme.colors.PRIMARY_SOFT};
        }
      }

      .label {
        margin-left: 0.3em;
      }
    }
  }
`;
