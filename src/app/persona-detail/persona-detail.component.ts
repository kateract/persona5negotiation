import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../persona';
import { PersonaTypes, Arcanas, PersonaType } from '../typeDefs';
import { PersonaService } from '../persona.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-persona-detail',
  templateUrl: './persona-detail.component.html',
  styleUrls: ['./persona-detail.component.css'],
})
export class PersonaDetailComponent implements OnInit {
  @Input() persona: Persona;
  @Input() edit: boolean;
  @Input() id: string;
  public PersonaTypes = PersonaTypes;
  public Arcanas = Arcanas;
  constructor(private personaService: PersonaService,
    private route: ActivatedRoute,
    private location: Location 
  ) { }

  ngOnInit() {
    if (!this.persona) {
      this.route.paramMap.subscribe(map => {
        this.id = map.get('id');
        this.personaService.getPersona(this.id).subscribe(persona => {
          this.persona = persona;
        });
      });
      if (this.id) {
        this.personaService.getPersona(this.id)
          .subscribe(persona => this.persona = persona);
      } else {
        this.persona = new Persona;
        this.persona.type = new PersonaType(PersonaTypes.Gloomy);
      }
    }

  }
  public add(): void {
    this.personaService.addPersona(this.persona).subscribe((p: Persona) => {
      this.location.back();
    });
  }
  public save(): void {
    this.personaService.editPersona(this.persona).subscribe((p: Persona) => {
      this.location.back();
    });
  }
}
