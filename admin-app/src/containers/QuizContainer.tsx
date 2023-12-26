import { useState } from 'react';
import { useQuizLists } from '@services/queries/quizQuery';
import { QuizListsBoard } from '@components/boards/quiz/QuizListsBoard';

export const QuizContainer = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuizLists({limit: 10, offset: 0});
  if (isLoading) return null;
  const pageHandler = (next: boolean, page: number) => {
    next ? setPage(page + 1) : setPage(page - 1);
  };

  return (
    <QuizListsBoard boardData={data} totalPage={10} pagination={pageHandler} />
  );
};
