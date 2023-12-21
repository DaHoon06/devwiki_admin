import styled from 'styled-components';

export const QuizListTable = styled.table`
  width: 100%;
  height: 100%;
  scale: 0.98;

  thead > tr {
    text-align: center;

    th {
      padding-bottom: 1em;
    }
  }

  tbody > tr {
    border-top: 1px solid ${({ theme }) => theme.colors.GRAY_300};
    border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY_300};
    text-align: center;

    &:hover {
      background-color: #f8f8f8;
      cursor: pointer;
      scale: 1;
    }

    &.active {
      z-index: 10;
      background: #f6f6f6;
    }
  }

  tbody > tr > td {
    padding: 1.25em 0;

    .answer_input_box {
      display: flex;
      flex-direction: column;

      label {
        text-align: left;
        width: 100%;
      }

      label > input {
        width: 100%;
        height: 40px;
        padding: 0.5em 0.3em;
        border: 1px solid #ededed;
        border-radius: 4px;
        color: #222;

        &:disabled {
          color: #cccccc;
        }
      }
    }
  }
`;

export const PaginationLists = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em 0;
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

export const TableHeaderOption = styled.div`
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
