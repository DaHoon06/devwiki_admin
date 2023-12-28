import { CardUi } from '@components/ui/card/Card';
import React, { ReactElement, useEffect, useState } from 'react';
import { Quiz, UpdateQuiz } from '@interfaces/Quiz';
import { Link } from 'react-router-dom';
import {useDeleteQuiz, useUpdateQuiz} from '@services/mutation/useQuizMutation';
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
  const { data, isLoading } = useQuizLists({ page: currentPage });

  const deleteQuizMutate = useDeleteQuiz();
  const updateQuizMutate = useUpdateQuiz();

  useEffect(() => {
    if (data && data.quizList.length > 0) setInputState((prevState) => [...prevState, ...data.quizList]);
  }, [data]);

  const onClickPaginationHandler = (page: number) => {
    setCurrentPage(page);
  };

  const onClickUpdateQuizHandler = (quizId: number) => {
    setUpdateQuizId(quizId);
    // updateQuizMutate(updateQuizId);
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
    if (data) {
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

  if (isLoading) return <span>Loading...</span>

  return (
    <CardUi label={'몰랑 퀴즈'}>
      {data && data.quizList.length > 0 ? (
        <>
          <S.HeaderOption>
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
          </S.HeaderOption>
          <S.QuizListLayout>
            <S.QuizHeader>
              <label>
                <Typography as={'span'}>
                  전체 선택
                </Typography>
                <input
                  type={'checkbox'}
                  onChange={onChangeCheckboxAllSelected}
                  checked={deleteCheckbox.length === inputState.length}
                />
              </label>

            </S.QuizHeader>
            {inputState.map((board) => {
              return (
                <S.QuizBox
                  key={`mollrang-quiz-${board.quizId}`}
                  className={updateQuizId === board.quizId ? 'active' : ''}
                >
                  <div>
                    <S.QuizBoxOptions>
                      <label htmlFor={`check-label-${board.quizId}`}>
                        <input
                          checked={deleteCheckbox.includes(+board.quizId)}
                          type={'checkbox'}
                          value={board.quizId}
                          id={`check-label-${board.quizId}`}
                          onChange={onChangeCheckbox}
                        />
                      </label>
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
                    </S.QuizBoxOptions>
                    <div>
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
                  </div>
                  <div>
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
                  </div>
                </S.QuizBox>
              );
            })}
          </S.QuizListLayout>

          <Pagination />
        </>
      ) : (
        <div>
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

          <Typography>등록된 퀴즈가 없습니다. 퀴즈를 등록해주세요.</Typography>

        </div>
      )}
    </CardUi>
  );
};
