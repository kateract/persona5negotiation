import { AnswerTypes } from './personaTypeDefs';

export class Question {
  id: string;
  text: string;
  answers: Answer[];
}

export class Answer {
  id: string;
  text: string;
  type: AnswerTypes;
  types: AnswerTypes[];
  questionId: string;
}
