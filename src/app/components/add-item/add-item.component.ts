import { Input, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PersonaDetailComponent } from '../persona-detail/persona-detail.component';
import { QuestionDetailComponent } from '../question-detail/question-detail.component';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Input() type: string;
  @ViewChild(PersonaDetailComponent)
  private personaDetailComponent: PersonaDetailComponent;
  @ViewChild(QuestionDetailComponent)
  private questionDetailComponent: QuestionDetailComponent;
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(map => this.type = map.get('type'));
  }

  add(): void {
    if (this.type === 'question') {
      this.questionDetailComponent.add();
    }
    if (this.type === 'persona') {
      this.personaDetailComponent.add();
    }
  }

  cancel(): void {
    this.location.back();
  }
}
