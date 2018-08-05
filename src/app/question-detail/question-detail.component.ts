import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question';
import { AnswerTypes } from '../typeDefs';
import { ActivatedRoute } from '@angular/router';


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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (!this.question) {
      this.route.paramMap.subscribe(map => {
        this.id = map.get('id');
        this.getQuestion();
      });
      if (this.id) {
        this.getQuestion();
      } else {
        this.mode = 'New';
        this.question = new Question();
        this.question.text = '';
        this.question.answers = [
          { id: "", text: '', type: null, questionId: "" },
          { id: "", text: '', type: null, questionId: "" },
          { id: "", text: '', type: null, questionId: "" }
        ];
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
    });
  }

  add(): void  {
    this.questionService.add(this.question);
  }
  save(): void {
    this.questionService.save(this.question);
  }
}
