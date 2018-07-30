import { AnswerTypes } from './typeDefs';

export class Question {
  text: string;
  answers: Answer[];
}

export class Answer {
  text: string;
  type: AnswerTypes;
}
