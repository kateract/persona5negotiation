import { Injectable } from '@angular/core';
import { Question, Answer } from '../models/question';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questionUrl = 'http://localhost:3000/questions';
  private answerUrl = 'http://localhost:3000/answers';
  constructor(
    private http: HttpClient
  ) { }

  getQuestions(): Observable<Question[]> {
    this.http.get<Question[]>(`${this.questionUrl}/?filter[include][][relation]=answers`).subscribe(questions => {
      questions.forEach(q => {
        q.answers.forEach(a => {
          console.log(`saving answer : ${JSON.stringify(a)}`);
          this.saveAnswer(a).subscribe();
        });
      });
    });
    return this.http.get<Question[]>(`${this.questionUrl}/?filter[include][][relation]=answers`);
  }

  getQuestion(id: number): Observable<Question> {
    console.log(`getting question: ${id}`);
    return this.http.get<Question>(`${this.questionUrl}/${id}/?filter[include][][relation]=answers`);
  }

  addQuestion(question: Question): Observable<Question> {
    console.log(question);
    return new Observable(observer => {
      let answers = question.answers;
      delete question.answers;
      console.log(question);
      this.http.post<Question>(this.questionUrl, question).subscribe(q => {
        forkJoin(this.addAnswers(q.id, answers)).subscribe(a => {
          q.answers = a;
          observer.next(q);
          observer.complete();
        });
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
      let answers = question.answers;
      delete question.answers;
      this.http.put<Question>(`${this.questionUrl}/${question.id}`, question).subscribe((q: Question) => {
        forkJoin(this.saveAnswers(answers)).subscribe(a => {
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
    return this.http.put<Answer>(`${this.answerUrl}/${answer.id}`, answer);
  }

  delete(question: Question): void {
    question.answers.forEach(answer => {
      this.http.delete(`${this.answerUrl}/${question.id}/answers`);
    });
    this.http.delete(`${this.questionUrl}/${question.id}`);
  }
}
