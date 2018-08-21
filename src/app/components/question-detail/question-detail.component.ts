import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question, Answer, AnswerTypes } from '../../../models/question';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  @Input() edit: boolean;
  @Input() question: Question;
  @Input() id: string;
  private pasteText: string;
  public mode = 'Edit';
  public AnswerTypes = AnswerTypes;
  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    if (!this.question) {
      this.route.paramMap.subscribe(map => {
        this.id = map.get('id');
      });
      this.question = new Question();
      this.question.text = '';
      this.question.answers = [
        { id: null, text: '', type: null, types: [], questionId: '' },
        { id: null, text: '', type: null, types: [], questionId: '' },
        { id: null, text: '', type: null, types: [], questionId: '' }
      ];
      if (this.id) {
        this.getQuestion();
        this.mode = 'Edit';
      } else {
        this.mode = 'New';

      }
    }
  }

  dataPaste(): void {
    const s = this.pasteText.split('\n');
    if (s[0]) { this.question.text = s[0]; }
    if (s[1]) { this.question.answers[0].text = s[1]; }
    if (s[2]) { this.question.answers[1].text = s[2]; }
    if (s[3]) { this.question.answers[2].text = s[3]; }

  }

  getQuestion(): void {
    this.questionService.getQuestion(this.id).subscribe(question => {
      this.question = question;
      console.log(JSON.stringify(question));
    });
  }

  add(): void  {
    this.questionService.addQuestion(this.question).subscribe((q: Question) => {
      console.log(`Added question: ${JSON.stringify(q)}`);
      this.location.back();
    });
  }
  save(): void {
    this.questionService.saveQuestion(this.question).subscribe((q: Question) => {
      console.log(`Saved question: ${JSON.stringify(q)}`);
      this.location.back();
    });
  }

  cancel(): void {
    this.location.back();
  }
}
