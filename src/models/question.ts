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

export enum AnswerTypes {
  Funny = 'Funny',
  Kind = 'Kind',
  Serious = 'Serious',
  Vague = 'Vague'
}

export namespace AnswerTypes {
  export function values(): string[] {
    return Object.keys(AnswerTypes).filter((type) => isNaN(<any>type) && type !== 'values');
  }
}
