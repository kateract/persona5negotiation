import { Injectable } from '@angular/core';
// import { QUESTIONS } from './questions';
import { Question, Answer } from './question';
import { Observable, of, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  // private questions: Question[] = QUESTIONS;
  private questionUrl = 'http://crescendo:3000/api/questions';
  private answerUrl = 'http://crescendo:3000/api/answers';
  constructor(
    private http: HttpClient
  ) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.questionUrl}/?filter={"include":"answers"}`);
  }

  getQuestion(id: string): Observable<Question> {
    return this.http.get<Question>(`${this.questionUrl}/${id}`);
  }

  add(question: Question): Observable<Question> {
    this.http.post<Question>(this.questionUrl, question).pipe(mergeMap((q: Question) => {
      question.answers.forEach(answer => {
        answer.questionId = q.id;
        console.log(JSON.stringify(answer));
        this.http.post(this.answerUrl, answer ).subscribe((a: Answer) => {
          console.log(`Created answer ${JSON.stringify(a)}`);
        });
      });
    });
  }

  save(question: Question): Observable<Question> {
    this.http.put<Question>(this.questionUrl, question).subscribe((q: Question) => {
      const a: Observable<Answer>[] = [];
      question.answers.forEach(answer => {
        answer.questionId = q.id;
        a.push(this.http.put<Answer>(this.answerUrl, answer));
      });
      forkJoin(a).subscribe((results: Answer[]) => {
        q.answers = results;
        return of(q);
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
