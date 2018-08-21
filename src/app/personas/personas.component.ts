import { Component, OnInit } from '@angular/core';
import { Persona, PersonaType, PersonaTypes } from '../../models/persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas: Persona[];
  selectedPersona: Persona;
  searchString: string;
  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.getPersonas();
    this.personaService.updated.subscribe(() => this.getPersonas());
  }

  getPersonas(): void {
    this.personaService.getPersonas()
      .subscribe(personas => this.personas = personas);
  }

  selectPersona(persona: Persona): void {
    this.selectedPersona = persona;
  }
}
