export namespace Quiz {
  export interface Base {
    question: string;
    answer: string;
    prefix: string;
    suffix: string;
  }

  export type InsertData = Base;
}