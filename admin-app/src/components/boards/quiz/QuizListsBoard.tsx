import { CardUi } from '@components/ui/card/Card';
import React, { ReactElement, useEffect, useState } from 'react';
import { Quiz, UpdateQuiz } from '@interfaces/Quiz';
import { Link } from 'react-router-dom';
import { useDeleteQuiz } from '@services/mutation/useQuizMutation';
import * as S from './QuizListsBoard.style';
import { Typography } from '@components/common/Typography';
import { AiFillSave } from 'react-icons/ai';
import { HiPencilAlt } from 'react-icons/hi';
import { FaPlus } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Button } from '@components/common/Button';
import { useQuizLists } from '@services/queries/quizQuery';

export const QuizListsBoard = (): ReactElement => {
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteCheckbox, setDeleteCheckbox] = useState<number[]>([]);
  const [updateQuizId, setUpdateQuizId] = useState(-1);
  const [inputState, setInputState] = useState<UpdateQuiz[]>([]);
  const { data, isLoading } = useQuizLists({ limit: 10, offset: 0 });
  const deleteQuizMutate = useDeleteQuiz();

  // if (isLoading) return null;

  useEffect(() => {
    // if (boardData) setInputState((prevState) => [...prevState, ...boardData]);
  }, [data]);

  const onClickPaginationHandler = (page: number) => {
    setCurrentPage(page);
  };

  const onClickUpdateQuizHandler = (quizId: number) => {
    setUpdateQuizId(quizId);
  };

  const onClickDeleteQuizHandler = async () => {
    deleteQuizMutate(deleteCheckbox);
    setDeleteCheckbox([]);
  };

  const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!deleteCheckbox.includes(+value))
      setDeleteCheckbox((prev) => [...prev, +value]);
    else setDeleteCheckbox(deleteCheckbox.filter((id) => id !== +value));
  };

  const onChangeCheckboxAllSelected = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = e.target;
    const arr: number[] = [];
    if (checked) inputState.forEach((board) => arr.push(+board.quizId));
    setDeleteCheckbox(arr);
  };

  const onChangeInputValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    quizId: number
  ) => {
    const { value, name } = e.target;
    setInputState(
      inputState.map((quiz) => {
        if (quiz.quizId === quizId) {
          return {
            ...quiz,
            [name]: value,
          };
        }
        return {
          ...quiz,
        };
      })
    );
  };

  const inputDisabledCheck = (quizId: number): boolean => {
    return updateQuizId !== quizId;
  };

  const Pagination = (): ReactElement => {
    const group = [];
    for (let i = 0; i < data.totalPage; i++) {
      const page = i + 1;
      group.push(
        <button
          className={currentPage === page ? 'active' : ''}
          onClick={() => onClickPaginationHandler(page - 1)}
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
      <S.TableHeaderOption>
        <Button type={'button'} onClick={onClickDeleteQuizHandler}>
          <MdDelete size={16} color={'#fff'} />
          <Typography as={'span'} $color={'textWhite'} $weight={'bold'}>
            선택 삭제
          </Typography>
        </Button>
        <div className={'add_quiz_anchor_box'}>
          <Link to={'/mollrang/quiz/post'}>
            <FaPlus size={16} color={'#222'} />
            <Typography
              as={'span'}
              $color={'textBlack200'}
              $weight={'bold'}
              className={'label'}
            >
              퀴즈 추가
            </Typography>
          </Link>
        </div>
      </S.TableHeaderOption>
      <S.QuizListTable>
        <thead>
          <tr>
            <th>
              <input
                type={'checkbox'}
                onChange={onChangeCheckboxAllSelected}
                checked={deleteCheckbox.length === inputState.length}
              />
            </th>
            <th>퀴즈</th>
            <th>정답</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          {inputState.map((board) => {
            return (
              <tr
                key={board.quizId}
                className={updateQuizId === board.quizId ? 'active' : ''}
              >
                <td>
                  <label htmlFor={`check-label-${board.quizId}`}>
                    <input
                      checked={deleteCheckbox.includes(+board.quizId)}
                      type={'checkbox'}
                      value={board.quizId}
                      id={`check-label-${board.quizId}`}
                      onChange={onChangeCheckbox}
                    />
                  </label>
                </td>
                <td>
                  <div className={'answer_input_box'}>
                    <label>
                      <Typography
                        as={'span'}
                        $color={'textGray200'}
                        $weight={'medium'}
                      >
                        퀴즈
                      </Typography>
                      <input
                        type={'text'}
                        name={'question'}
                        value={board.question}
                        disabled={inputDisabledCheck(board.quizId)}
                        onChange={(e) => onChangeInputValue(e, board.quizId)}
                      />
                    </label>
                  </div>
                </td>
                <td>
                  <div className={'answer_input_box'}>
                    <label>
                      <Typography
                        as={'span'}
                        $color={'textGray200'}
                        $weight={'medium'}
                      >
                        Prefix
                      </Typography>
                      <input
                        type={'text'}
                        value={board.prefix}
                        name={'prefix'}
                        disabled={inputDisabledCheck(board.quizId)}
                        onChange={(e) => onChangeInputValue(e, board.quizId)}
                      />
                    </label>
                    <label>
                      <Typography
                        as={'span'}
                        $color={'textGray200'}
                        $weight={'medium'}
                      >
                        Answer
                      </Typography>
                      <input
                        type={'text'}
                        value={board.answer}
                        name={'answer'}
                        disabled={inputDisabledCheck(board.quizId)}
                        onChange={(e) => onChangeInputValue(e, board.quizId)}
                      />
                    </label>
                    <label>
                      <Typography
                        as={'span'}
                        $color={'textGray200'}
                        $weight={'medium'}
                      >
                        Suffix
                      </Typography>
                      <input
                        type={'text'}
                        value={board.suffix}
                        name={'suffix'}
                        disabled={inputDisabledCheck(board.quizId)}
                        onChange={(e) => onChangeInputValue(e, board.quizId)}
                      />
                    </label>
                  </div>
                </td>
                <td>
                  {!inputDisabledCheck(board.quizId) ? (
                    <Button
                      variant={'icon'}
                      type={'button'}
                      onClick={() => onClickUpdateQuizHandler(board.quizId)}
                    >
                      저장
                      <AiFillSave size={24} />
                    </Button>
                  ) : (
                    <Button
                      variant={'icon'}
                      type={'button'}
                      onClick={() => onClickUpdateQuizHandler(board.quizId)}
                    >
                      수정
                      <HiPencilAlt size={24} />
                    </Button>
                  )}
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
