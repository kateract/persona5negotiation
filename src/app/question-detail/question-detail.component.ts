import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question';


@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  @Input() edit: boolean;
  @Input() question: Question;
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
  }

  add(): void  {

  }
  save(): void {

  }
}
