import { Component, OnInit } from '@angular/core';
import { PersonaTypes, PersonaType } from '../personaTypeDefs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  types: PersonaType[];
  ngOnInit() {
    this.getTypes();
  }

  getTypes(): void {
    this.types = PersonaTypes.values().map(t => new PersonaType(PersonaTypes[t]));
  }

}
