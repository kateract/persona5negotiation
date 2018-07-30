import { Injectable } from '@angular/core';
import { QUESTIONS } from './questions';
import { Question } from './question';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestions(): Observable<Question[]> {
    return of(QUESTIONS);
  }
}
