
import { Input, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonaDetailComponent } from '../persona-detail/persona-detail.component';
import { QuestionDetailComponent } from '../question-detail/question-detail.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  @Input() type: string;
  @Input() id: number;
  @ViewChild(PersonaDetailComponent, { static: false })
  private personaDetailComponent: PersonaDetailComponent;
  @ViewChild(QuestionDetailComponent, { static: false })
  private questionDetailComponent: QuestionDetailComponent;
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(map => this.type = map.get('type'));
  }

  save(): void {
    if (this.type === 'question') {
      this.questionDetailComponent.save();
    }
    if (this.type === 'persona') {
      this.personaDetailComponent.save();
    }
  }

  cancel(): void {
    this.location.back();
  }
}
