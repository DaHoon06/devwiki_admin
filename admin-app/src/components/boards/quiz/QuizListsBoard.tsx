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

interface Props {
  boardData: Quiz[];
  totalPage: number;
  pagination: (next: boolean, page: number) => void;
}

const mock: Quiz[] = [
  {
    quizId: 0,
    question: '퀴즈1',
    answer: '정답',
    prefix: '1',
    suffix: '',
    created_at: new Date(),
  },
  {
    quizId: 1,
    question: '퀴즈2',
    answer: '정답',
    prefix: '',
    suffix: '1',
    created_at: new Date(),
  },
  {
    quizId: 2,
    question: '퀴즈3',
    answer: '정답',
    prefix: '2',
    suffix: '2',
    created_at: new Date(),
  },
  {
    quizId: 3,
    question: '퀴즈4',
    answer: '정답',
    prefix: '3',
    suffix: '',
    created_at: new Date(),
  },
  {
    quizId: 4,
    question: '퀴즈5',
    answer: '정답',
    prefix: '3',
    suffix: '',
    created_at: new Date(),
  },
  {
    quizId: 5,
    question: '퀴즈6',
    answer: '정답',
    prefix: '3',
    suffix: '',
    created_at: new Date(),
  },
  {
    quizId: 6,
    question: '퀴즈7',
    answer: '정답',
    prefix: '4',
    suffix: 'a',
    created_at: new Date(),
  },
  {
    quizId: 7,
    question: '퀴즈8',
    answer: '정답',
    prefix: 'a',
    suffix: '1',
    created_at: new Date(),
  },
  {
    quizId: 8,
    question: '퀴즈9',
    answer: '정답',
    prefix: 'cv',
    suffix: 's',
    created_at: new Date(),
  },
  {
    quizId: 9,
    question: '퀴즈10',
    answer: '정답',
    prefix: 'a',
    suffix: 'a',
    created_at: new Date(),
  },
  {
    quizId: 10,
    question: '퀴즈11',
    answer: '정답',
    prefix: '1',
    suffix: 'd',
    created_at: new Date(),
  },
];
export const QuizListsBoard = (props: Props): ReactElement => {
  const { boardData, totalPage, pagination } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteCheckbox, setDeleteCheckbox] = useState<number[]>([]);
  const [updateQuizId, setUpdateQuizId] = useState(-1);
  const [inputState, setInputState] = useState<UpdateQuiz[]>([]);
  // const { data, isLoading } = useQuizLists({limit: 0, offset: 0});
  const deleteQuizMutate = useDeleteQuiz();
  // if (isLoading) return null;

  useEffect(() => {
    setInputState((prevState) => [...prevState, ...mock]);
  }, [mock]);

  const onClickPaginationHandler = (page: number) => {
    setCurrentPage(page);
    pagination(true, page);
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
    if (checked) mock.forEach((board) => arr.push(+board.quizId));
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
    for (let i = 0; i < totalPage; i++) {
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
    </CardUi>
  );
};
