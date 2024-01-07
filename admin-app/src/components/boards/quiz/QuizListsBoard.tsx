import { CardUi } from '@components/ui/card/Card';
import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import { UpdateQuiz } from '@interfaces/Quiz';
import { Link } from 'react-router-dom';
import {
  useDeleteQuiz,
  useUpdateQuiz,
} from '@services/mutation/useQuizMutation';
import * as S from './QuizListsBoard.style';
import { Typography } from '@components/common/Typography';
import { FaPlus } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Button } from '@components/common/Button';
import { useQuizLists } from '@services/queries/quizQuery';
import {SpinnerUi} from "@components/ui/spinner/SpinnerUi";

export const QuizListsBoard = (): ReactElement => {
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteCheckbox, setDeleteCheckbox] = useState<number[]>([]);
  const [updateQuizId, setUpdateQuizId] = useState(-1);
  const { data, isLoading } = useQuizLists({ page: currentPage });
  const [inputState, setInputState] = useState<UpdateQuiz[]>([]);

  const deleteQuizMutate = useDeleteQuiz();
  const updateQuizMutate = useUpdateQuiz();

  const boardData = useMemo(() => {
    if (isLoading) return null;
    return data
  }, [data, isLoading]);

  useEffect(() => {
    if (boardData?.quizList) setInputState(boardData.quizList)
  }, [boardData]);

  const onClickPaginationHandler = (page: number) => {
    setCurrentPage(page);
  };

  const onClickEditModeHandler = (quizId: number) => {
    setUpdateQuizId(quizId);
  };

  const onClickUpdateQuizHandler = (quizId: number) => {
    const body = inputState.filter((board) => board.quizId === quizId);
    if (body) updateQuizMutate(body);
    setUpdateQuizId(-1);
  }

  const onClickCancelQuizHandler = () => {
    setUpdateQuizId(-1);
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
    setInputState(inputState.map((quiz) => {
      if (quiz.quizId === quizId) {
        return {
          ...quiz,
          [name]: value,
        };
      }
      return {
        ...quiz,
      };
    }))
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
            disabled={currentPage === page}
            onClick={() => onClickPaginationHandler(page)}
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

  if (isLoading) return <SpinnerUi />;

  return (
    <CardUi label={'몰랑 퀴즈'}>
      {inputState.length > 0 ? (
        <>
          <S.HeaderOption>
            <div className={'add_quiz_anchor_box'}>
              <Link to={'/mollrang/quiz/post'}>
                <FaPlus size={16} color={'var(--bg_default)'} />
                <Typography
                  as={'span'}
                  $color={'textDefault'}
                  $weight={'bold'}
                  className={'label'}
                >
                  퀴즈 추가하기
                </Typography>
              </Link>
            </div>
          </S.HeaderOption>
          <S.QuizListLayout>
            <S.QuizHeader>
              <label>
                <Typography as={'span'}>전체 선택</Typography>
                <input
                  type={'checkbox'}
                  onChange={onChangeCheckboxAllSelected}
                  checked={deleteCheckbox.length === inputState.length}
                />
              </label>
              <Button
                type={'button'}
                onClick={onClickDeleteQuizHandler}
                disabled={deleteCheckbox.length === 0}
              >
                <MdDelete size={16} color={'#fff'} />
                <Typography as={'span'} $color={'textWhite'} $weight={'bold'}>
                  선택 삭제
                </Typography>
              </Button>
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
                        <div className={'options'}>
                          <Button
                            variant={'icon'}
                            type={'button'}
                            onClick={() =>
                              onClickUpdateQuizHandler(board.quizId)
                            }
                            className={'update_save_button'}
                          >
                            <Typography as={'span'} $color={'textDefault'} $variant={"caption"}>
                              퀴즈 저장하기
                            </Typography>
                          </Button>
                          <Button
                            variant={'icon'}
                            type={'button'}
                            onClick={() => onClickCancelQuizHandler()}
                          >
                            <Typography as={'span'} $color={'textDefault'} $variant={"caption"}>
                              취소
                            </Typography>
                          </Button>
                        </div>
                      ) : (
                        <Button
                          variant={'icon'}
                          type={'button'}
                          onClick={() => onClickEditModeHandler(board.quizId)}
                        >
                          <Typography as={'span'} $color={'textDefault'} $variant={"caption"}>
                            퀴즈 수정하기
                          </Typography>
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
