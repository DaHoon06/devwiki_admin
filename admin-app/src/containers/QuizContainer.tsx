import { useState } from 'react';
import { useQuizLists } from '@services/queries/quizQuery';
import { QuizListsBoard } from "@components/dashboard/QuizListsBoard";

export interface QuizBoardProps {
  _id: string;
  desc: string;
  sid: string;
  userId: string;
  userName: string;
  devManager: string;
  dueDate: string;
  dueTime: string;
  date: string;
  tool: string;
}

export const QuizContainer = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuizLists({limit: 0, offset: 0});
  if (isLoading) return null;
  const pageHandler = (next: boolean, page: number) => {
    next ? setPage(page + 1) : setPage(page - 1);
  };

  return (
    <QuizListsBoard
      boardData={[]}
      totalPage={data.total}
      pagination={pageHandler}
    />
  );
};
