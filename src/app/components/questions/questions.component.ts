import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionService } from '../../services/question.service';
import { Question, AnswerTypes, Answer } from '../../models/question';
import { PersonaTypes, PersonaType } from '../../models/persona';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @Input() type: string;
  personaType: PersonaType;
  questions: Question[];
  searchString: string;
  filteredQuestions: Question[];
  AnswerTypes = AnswerTypes;
  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getQuestions();
    this.route.paramMap.subscribe(map => {
      this.type = map.get('type');
      if (this.type) {
        this.personaType = new PersonaType(PersonaTypes[this.type]);
      }
    });
  }
  filter(string) {
    this.filteredQuestions = this.questions.filter(q => q.text.includes(this.searchString));
  }

  getQuestions(): void {
    this.questionService.getQuestions()
      .subscribe(questions => {
        this.questions = questions;
        this.filteredQuestions = questions;
      });
  }
  getClass(types: AnswerTypes[]) {
    if (types && this.personaType) {
      if (types.find(t => t === this.personaType.like)) {
        return 'like';
      } else if (this.personaType.dislike.filter(dtype => -1 !== types.indexOf(dtype)).length > 0) {
        return 'dislike';
      }
    }
    return 'neutral';
  }

  saveAnswer(answer: Answer, value: string): void {
    console.log(`saveAnswer event called: ${value}`);
    answer.types.push(AnswerTypes[value]);
    this.questionService.saveAnswer(answer).subscribe(a => {
      console.log(`Saved answer: ${JSON.stringify(a)}`);
    });
  }
}
