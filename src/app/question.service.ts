import { Injectable } from '@angular/core';
import { QUESTIONS } from './questions';
import { Question } from './question';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questions: Question[] = QUESTIONS;
  constructor() { }

  getQuestions(): Observable<Question[]> {
    return of(this.questions);
  }

  getQuestion(id: number): Observable<Question> {
    return of(this.questions.find(q => q.id === id));
  }

  add(question: Question): void {
    this.questions.push(question);
  }

  save(question: Question): void {
    this.questions.splice(this.questions.findIndex(q => q.id === question.id), 1);
    this.questions.push(question);
  }
}
