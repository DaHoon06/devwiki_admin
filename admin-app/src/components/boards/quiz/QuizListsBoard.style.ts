import styled from 'styled-components';

export const PaginationLists = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em 0;
`;

export const QuizListLayout = styled.div`
  width: 100%;
  height: 100%;
  scale: 0.98;
`;

export const QuizHeader = styled.div`
  padding: 1em 0;
`;
export const QuizBoxOptions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5em;
`;
export const QuizBox = styled.div`
  padding: 1em 0;
  border-top: 1px solid ${({ theme }) => theme.colors.GRAY_300};
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY_300};

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
    background-color: #f8f8f8;
    cursor: pointer;
    scale: 1;
  }

  &.active {
    z-index: 10;
    background: #f6f6f6;
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
    color: ${({ theme }) => theme.colors.GRAY_200};

    &.active {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.PRIMARY};
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
