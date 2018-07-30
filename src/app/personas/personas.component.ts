import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaType, PersonaTypes } from '../typeDefs';
import { PERSONAS } from '../mock-personas';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas = PERSONAS;
  constructor() { }

  ngOnInit() {
  }

}
