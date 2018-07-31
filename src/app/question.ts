import { AnswerTypes } from './typeDefs';

export class Question {
  id: number;
  text: string;
  answers: Answer[];
}

export class Answer {
  id: number;
  text: string;
  type: AnswerTypes;
}
