import { Injectable } from '@angular/core';
import { Question, Answer } from './question';
import { Observable, of, forkJoin, Observer } from 'rxjs';
import { map, mergeMap, subscribeOn } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { resolve } from '../../node_modules/@types/q';
import { jsonpCallbackContext } from '../../node_modules/@angular/common/http/src/module';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questionUrl = 'http://crescendo:3000/api/questions';
  private answerUrl = 'http://crescendo:3000/api/answers';
  constructor(
    private http: HttpClient
  ) { }

  getQuestions(): Observable<Question[]> {
    this.http.get<Question[]>(`${this.questionUrl}/?filter={"include":"answers"}`).subscribe(questions => {
      questions.forEach(q => {
        q.answers.forEach(a => {
          if (!a.types || a.types.length === 0) {
            if (a.type) {
              a.types = [];
              a.types.push(a.type);
              console.log(`saving answer : ${JSON.stringify(a)}`);
              this.saveAnswer(a).subscribe();
            }
          }
        });
      });
    });
    return this.http.get<Question[]>(`${this.questionUrl}/?filter={"include":"answers"}`);
  }

  getQuestion(id: string): Observable<Question> {
    console.log(`getting question: ${id}`);
    return this.http.get<Question>(`${this.questionUrl}/${id}/?filter={"include":"answers"}`);
  }

  addQuestion(question: Question): Observable<Question> {
    return Observable.create(observer => {
      this.http.post<Question>(this.questionUrl, question).subscribe(q => {
        forkJoin<Answer>(this.addAnswers(q.id, question.answers)).subscribe(a => {
          q.answers = a;
          observer.next(q);
          observer.complete();
        });
      });
    });
  }

  addAnswers(questionId: string, answers: Answer[]): Observable<Answer>[] {
    return answers.map(a => this.addAnswer(questionId, a));
  }

  addAnswer(questionId: string, answer: Answer): Observable<Answer> {
    answer.questionId = questionId;
    return this.http.post<Answer>(this.answerUrl, answer);
  }

  saveQuestion(question: Question): Observable<Question> {
    return Observable.create(observer => {
      this.http.put<Question>(this.questionUrl, question).subscribe((q: Question) => {
        forkJoin<Answer>(this.saveAnswers(question.answers)).subscribe(a => {
          q.answers = a;
          observer.next(q);
          observer.complete();
        });
      });
    });
  }

  saveAnswers(answers: Answer[]): Observable<Answer>[] {
    return answers.map(a => this.saveAnswer(a));
  }

  saveAnswer(answer: Answer): Observable<Answer> {
    return this.http.put<Answer>(this.answerUrl, answer);
  }

  delete(question: Question): void {
    question.answers.forEach(answer => {
      this.http.delete(`${this.answerUrl}/${question.id}/answers`);
      this.http.delete(`${this.questionUrl}/${question.id}`);
    });
  }
}
