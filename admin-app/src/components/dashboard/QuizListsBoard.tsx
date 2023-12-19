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
    <CardUi label={'스크립트 요청'}>
      <QuizListTable>
        <thead>
          <tr>
            <th>SID</th>
            <th>내용</th>
            <th>요청자</th>
            <th>담당자</th>
            <th>마감일</th>
          </tr>
        </thead>
        <tbody>
          {boardData.map((request) => {
            return (
              <tr key={request._id}>
                <td>{request.sid}</td>
                <td>
                  <div
                    className="desc"
                    dangerouslySetInnerHTML={{ __html: request.desc }}
                  />
                </td>
                <td>{request.userName}</td>
                <td>{request.devManager}</td>
                <td>
                  {request.dueDate} {request.dueTime}
                </td>
              </tr>
            );
          })}
        </tbody>
      </QuizListTable>
      <Pagination />
    </CardUi>
  );
};
