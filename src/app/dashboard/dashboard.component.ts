import { Component, OnInit } from '@angular/core';
import { PersonaTypes } from '../typeDefs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  types: string[];
  ngOnInit() {
    this.getTypes();
  }

  getTypes(): void {
    this.types = PersonaTypes.values();
  }

}
