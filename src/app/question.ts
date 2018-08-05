import { AnswerTypes } from './typeDefs';

export class Question {
  id: string;
  text: string;
  answers: Answer[];
}

export class Answer {
  id: string;
  text: string;
  type: AnswerTypes;
  questionId: string;
}
