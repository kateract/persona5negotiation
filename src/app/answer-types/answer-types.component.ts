import { Component, OnInit, Input } from '@angular/core';
import { Answer, AnswerTypes } from '../../models/question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-answer-types',
  templateUrl: './answer-types.component.html',
  styleUrls: ['./answer-types.component.css']
})
export class AnswerTypesComponent implements OnInit {

  constructor(
    private questionService: QuestionService
  ) { }

  @Input() answer: Answer;
  ngOnInit() {
  }

  private flipType(stype: string): boolean {
    let ret: boolean;
    const type = AnswerTypes[stype];
    if (this.answer.types) {
      const index = this.answer.types.findIndex(t => t === type);
      if (index >= 0) {
        this.answer.types.splice(index, 1);
        ret = false;
      } else {
        this.answer.types.push(type);
        ret = true;
      }
    } else {
      this.answer.types = [];
      this.answer.types.push(type);
    }
    if (this.answer.id) {
      console.log(`saving answer: ${JSON.stringify(this.answer)}`);
      this.questionService.saveAnswer(this.answer).subscribe(a => {this.answer = a; console.log(JSON.stringify(a)); });
    }
    return ret;

  }

  private checkType(stype: string): boolean {
    const type = AnswerTypes[stype];
    if (this.answer.types) {
      const index = this.answer.types.findIndex(t => t === type);
      return (index >= 0);
    }
    return false;
  }

}
