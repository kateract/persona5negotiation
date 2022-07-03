export class Question {
  id: number;
  text: string;
  answers: Answer[];
}

export class Answer {
  id: number;
  text: string;
  types: AnswerTypes[];
  questionId: number;
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
