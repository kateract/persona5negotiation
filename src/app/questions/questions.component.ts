import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionService } from '../question.service';
import { Question } from '../question';
import { AnswerTypes, PersonaTypes, PersonaType } from '../typeDefs';
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
    private location: Location
  ) { }

  ngOnInit() {
    this.getQuestions();
    this.route.paramMap.subscribe(map => {
      this.type = map.get('type');
      this.personaType = new PersonaType(PersonaTypes[this.type]);

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
  getClass(type: AnswerTypes) {
    if (type && this.personaType) {
      if (this.personaType.like === type) {
        return 'like';
      }
      if (this.personaType.dislike.find(dtype => type === dtype)) {
        return 'dislike';
      }
    }
    return 'neutral';
  }
}
