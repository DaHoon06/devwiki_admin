interface Base {
  question: string;
  answer: string;
  prefix: string;
  suffix: string;
}
export interface Quiz extends Base{
  quizId: number;
}

export type InsertQuizData = Base;
export type UpdateQuizData = Quiz;
