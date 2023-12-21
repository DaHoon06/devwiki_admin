import { CardUi } from '@components/ui/card/Card';
import React, { ReactElement, useState } from 'react';
import { QuizBoardProps } from '@containers/QuizContainer';
import {Quiz} from "@interfaces/Quiz";
import {Link} from "react-router-dom";
import {useDeleteQuiz} from "@services/mutation/useQuizMutation";
import * as S from './QuizListsBoard.style';
import {Typography} from "@components/common/Typography";


interface Props {
  boardData: QuizBoardProps[];
  totalPage: number;
  pagination: (next: boolean, page: number) => void;
}

const mock: Quiz[] = [
  {quizId: 0, question: '퀴즈1',answer: '정답',prefix: '1',suffix: '', created_at: new Date()},
  {quizId: 1, question: '퀴즈2',answer: '정답',prefix: '',suffix: '1', created_at: new Date()},
  {quizId: 2, question: '퀴즈3',answer: '정답',prefix: '2',suffix: '2', created_at: new Date()},
  {quizId: 3, question: '퀴즈4',answer: '정답',prefix: '3',suffix: '', created_at: new Date()},
  {quizId: 4, question: '퀴즈5',answer: '정답',prefix: '3',suffix: '', created_at: new Date()},
  {quizId: 5, question: '퀴즈6',answer: '정답',prefix: '3',suffix: '', created_at: new Date()},
  {quizId: 6, question: '퀴즈7',answer: '정답',prefix: '4',suffix: 'a', created_at: new Date()},
  {quizId: 7, question: '퀴즈8',answer: '정답',prefix: 'a',suffix: '1', created_at: new Date()},
  {quizId: 8, question: '퀴즈9',answer: '정답',prefix: 'cv',suffix: 's', created_at: new Date()},
  {quizId: 9, question: '퀴즈10',answer: '정답',prefix: 'a',suffix: 'a', created_at: new Date()},
  {quizId: 10, question: '퀴즈11',answer: '정답',prefix: '1',suffix: 'd', created_at: new Date()},
]
export const QuizListsBoard = (props: Props): ReactElement => {
  const { boardData, totalPage, pagination } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteCheckbox, setDeleteCheckbox] = useState<number[]>([]);

// const { data, isLoading } = useQuizLists({limit: 0, offset: 0});
  const deleteQuizMutate = useDeleteQuiz();
  // if (isLoading) return null;
  const onClickHandlerPagination = (page: number) => {
    setCurrentPage(page);
    pagination(true, page);
  };

  const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    if (!deleteCheckbox.includes(+value)) setDeleteCheckbox((prev) => [...prev, +value]);
    else setDeleteCheckbox(deleteCheckbox.filter(id => id !== +value));
  }

  const onChangeCheckboxAllSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {checked} = e.target;
    const arr: number[] = [];
    if (checked) mock.forEach(board => arr.push(+board.quizId));
    setDeleteCheckbox(arr);
  }

  const onClickDeleteQuiz = async () => {
    deleteQuizMutate(deleteCheckbox);
    setDeleteCheckbox([]);
  }

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
      <S.PaginationLists>
        {group.map((pageButtonElement, index) => {
          return (
            <S.PaginationItems key={`pagination-${index}`}>
              {pageButtonElement}
            </S.PaginationItems>
          );
        })}
      </S.PaginationLists>
    );
  };

  return (
    <CardUi label={'몰랑 퀴즈'}>
      <div>
        <Link to={'/mollrang/quiz/post'}>
          + Add Mollrang Quiz
        </Link>
        <button type={"button"} onClick={onClickDeleteQuiz}>
          선택 삭제
        </button>
      </div>
      <S.QuizListTable>
        <thead>
          <tr>
            <th>
              <input type={"checkbox"} onChange={onChangeCheckboxAllSelected} checked={deleteCheckbox.length === mock.length} />
            </th>
            <th>퀴즈</th>
            <th>정답</th>
            <th>작성일</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          {mock.map((board) => {
            return (
              <tr key={board.quizId}>
                <td>
                  <label htmlFor={`check-label-${board.quizId}`}>
                    <input checked={deleteCheckbox.includes(+board.quizId)} type={"checkbox"} value={board.quizId} id={`check-label-${board.quizId}`} onChange={onChangeCheckbox} />
                  </label>
                </td>
                <td>
                  <input type={'text'} value={board.question} disabled={true} />
                </td>
                <td>
                  <div className={'answer_input_box'}>
                    <label>
                      <Typography as={'span'} $color={"textGray200"} $weight={'medium'}>
                        Prefix
                      </Typography>
                      <input type={'text'} value={board.prefix} disabled={true} />
                    </label>
                    <label>
                      <Typography as={'span'} $color={"textGray200"} $weight={'medium'}>
                        Answer
                      </Typography>
                      <input type={'text'} value={board.answer} disabled={true} />
                    </label>
                    <label>
                      <Typography as={'span'} $color={"textGray200"} $weight={'medium'}>
                        Suffix
                      </Typography>
                      <input type={'text'} value={board.suffix} disabled={true} />
                    </label>
                  </div>
                </td>
                <td>{board.created_at.getFullYear()}</td>
                <td>
                  <button>수정</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </S.QuizListTable>
      <Pagination />
    </CardUi>
  );
};
