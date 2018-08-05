import { Injectable } from '@angular/core';
//import { QUESTIONS } from './questions';
import { Question } from './question';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  //private questions: Question[] = QUESTIONS;
  private questionUrl = "http://crescendo:3000/api/questions";
  private answerUrl = "http://crescendo:3000/api/answers";
  constructor(
    private http: HttpClient
  ) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.questionUrl}/?filter={"include":"answers"}`);
  }

  getQuestion(id: string): Observable<Question> {
    return this.http.get<Question>(`${this.questionUrl}/${id}`)
  }

  add(question: Question): void {
    this.http.post(this.questionUrl, question).subscribe((q: Question) => {
      question.answers.forEach(answer => {
        answer.questionId = q.id;
        this.http.post(this.answerUrl, answer );
      });
    });
  }

  save(question: Question): void {
    this.http.put(this.questionUrl, question).subscribe((q: Question) => {
      question.answers.forEach(answer => {
        answer.questionId = q.id;
        this.http.put(this.answerUrl, answer);
      });
    });
  }

  delete(question: Question): void {
    question.answers.forEach(answer => {
      this.http.delete(`${this.answerUrl}/${question.id}/answers`);
      this.http.delete(`${this.questionUrl}/${question.id}`);
    });
  }
}
