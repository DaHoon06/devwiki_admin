export interface Board {
  quizId: number;
  question: string;
  answer: string;
  prefix: string;
  suffix: string;
  askedYn: string;
  isDeleted: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}