import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../persona';
import { PersonaTypes, Arcanas, PersonaType } from '../personaTypeDefs';
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
        // this.personaService.getPersona(this.id).subscribe(persona => {
        //   this.persona = persona;
        // });
      });
      this.persona = new Persona;
      this.persona.type = PersonaTypes.Gloomy;
      this.persona.id = null;
      if (this.id) {
        this.get();
      }
    }
    this.personaService.updated.subscribe(() => {if (this.id) { this.get(); }});
  }

  public get() {
    this.personaService.getPersona(this.id)
      .subscribe(persona => {
        this.persona = persona;
      });
  }

  public add(): void {
    console.log(`adding persona: ${this.persona}`);
    this.personaService.addPersona(this.persona).subscribe((p: Persona) => {
      this.personaService.updated.next();
      this.location.back();
    });
  }
  public save(): void {
    this.personaService.editPersona(this.persona).subscribe((p: Persona) => {
      this.personaService.updated.next();
      this.location.back();
    });
  }
}
