interface DateBase {
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

interface QuizBase {
  question: string;
  answer: string;
  prefix: string;
  suffix: string;
}
export interface UpdateQuiz extends QuizBase{
  quizId: number;
}

export interface Quiz extends UpdateQuiz, DateBase {}

export type InsertQuizData = QuizBase
export type UpdateQuizData = UpdateQuiz;
