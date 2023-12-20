import { CardUi } from '@components/ui/card/Card';
import { ReactElement, useEffect, useState } from 'react';
import { QuizBoardProps } from '@containers/QuizContainer';
import styled from 'styled-components';

const QuizListTable = styled.table`
  width: 100%;

  thead {
    border-bottom: 1px solid black;
  }
  thead > tr {
    text-align: center;

    th {
    }
  }

  tbody > tr {
    &:hover {
      background-color: #1a283e;
      cursor: pointer;
      color: white !important;
    }
  }
  tbody > tr > td {
    .desc {
      overflow: hidden;
      width: 276px;
      height: 1.25rem;
      text-align: left;
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 1;
    }
  }
`;

const PaginationLists = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em 0;
`;

const PaginationItems = styled.li`
  width: 100%;
  border: 1px solid black;
  display: flex;
  &:hover {
    cursor: pointer;
  }

  & button {
    width: 100%;
    height: 100%;
    &.active {
      background-color: black;
    }
  }
`;

interface Props {
  boardData: QuizBoardProps[];
  totalPage: number;
  pagination: (next: boolean, page: number) => void;
}

export const QuizListsBoard = (props: Props): ReactElement => {
  const { boardData, totalPage, pagination } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const onClickHandlerPagination = (page: number) => {
    setCurrentPage(page);
    pagination(true, page);
  };

  const Pagination = (): ReactElement => {
    const group = [];
    for (let i = 0; i < totalPage; i++) {
      const page = i + 1;
      group.push(
        <button
          className={currentPage === page ? 'active' : ''}
          onClick={() => onClickHandlerPagination(page - 1)}
        >
          {page}
        </button>
      );
    }
    return (
      <PaginationLists>
        {group.map((pageButtonElement, index) => {
          return (
            <PaginationItems key={`pagination-${index}`}>
              {pageButtonElement}
            </PaginationItems>
          );
        })}
      </PaginationLists>
    );
  };

  useEffect(() => {}, [totalPage]);
  return (
    <CardUi label={'몰랑 퀴즈'}>
      <QuizListTable>
        <thead>
          <tr>
            <th>번호</th>
            <th>퀴즈</th>
            <th>정답</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>사용여부</th>
          </tr>
        </thead>
        <tbody>
          {boardData.map((board) => {
            return (
              <tr key={board._id}>
                <td>{board.sid}</td>
                <td>{board.sid}</td>
                <td>{board.sid}</td>
                <td>{board.sid}</td>
                <td>{board.sid}</td>
              </tr>
            );
          })}
        </tbody>
      </QuizListTable>
      <Pagination />
    </CardUi>
  );
};
