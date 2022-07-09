import { Inject, Injectable } from '@angular/core';
import { Question, Answer } from '../models/question';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from '../app.module';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questionUrl = this.baseApiUrl + 'api/Question';
  private answerUrl =  this.baseApiUrl + 'api/Answer';
  constructor(
    private http: HttpClient,
    @Inject(BASE_API_URL) private baseApiUrl: string
  ) { }

  getQuestions(): Observable<Question[]> {
    this.http.get<Question[]>(`${this.questionUrl}/`).subscribe(questions => {
      questions.forEach(q => {
        q.answers.forEach(a => {
          console.log(`saving answer : ${JSON.stringify(a)}`);
          this.saveAnswer(a).subscribe();
        });
      });
    });
    return this.http.get<Question[]>(`${this.questionUrl}/`);
  }

  getQuestion(id: number): Observable<Question> {
    console.log(`getting question: ${id}`);
    return this.http.get<Question>(`${this.questionUrl}/${id}/`);
  }

  addQuestion(question: Question): Observable<Question> {
    console.log(question);
    return new Observable(observer => {
      console.log(question);
      this.http.post<Question>(this.questionUrl, question).subscribe(q => {

          observer.next(q);
          observer.complete();

      });
    });
  }

  addAnswers(questionId: number, answers: Answer[]): Observable<Answer>[] {
    return answers.map(a => this.addAnswer(questionId, a));
  }

  addAnswer(questionId: number, answer: Answer): Observable<Answer> {
    answer.questionId = questionId;
    console.log(answer);
    return this.http.post<Answer>(this.answerUrl, answer);
  }

  saveQuestion(question: Question): Observable<Question> {
    return new Observable(observer => {
      this.http.put<Question>(`${this.questionUrl}/${question.id}`, question).subscribe((q: Question) => {
          observer.next(q);
          observer.complete();
      });
    });
  }

  saveAnswers(answers: Answer[]): Observable<Answer>[] {
    return answers.map(a => this.saveAnswer(a));
  }

  saveAnswer(answer: Answer): Observable<Answer> {
    return this.http.put<Answer>(`${this.answerUrl}/${answer.id}`, answer);
  }

  delete(question: Question): void {
    question.answers.forEach(answer => {
      this.http.delete(`${this.answerUrl}/${question.id}/answers`);
    });
    this.http.delete(`${this.questionUrl}/${question.id}`);
  }
}
