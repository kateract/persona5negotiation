import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../persona';
import { PersonaTypes, Arcanas, PersonaType } from '../typeDefs';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-persona-detail',
  templateUrl: './persona-detail.component.html',
  styleUrls: ['./persona-detail.component.css'],
})
export class PersonaDetailComponent implements OnInit {
  @Input() persona: Persona;
  public PersonaTypes = PersonaTypes;
  public Arcanas = Arcanas;
  constructor(private personaService: PersonaService
  ) { }

  ngOnInit() {
    if (!this.persona) {
      this.persona = new Persona;
      this.persona.type = new PersonaType(PersonaTypes.Gloomy);
    }
  }
  public add(): void {
    this.personaService.addPersona(this.persona);
  }
}
