import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Persona, PersonaTypes, Arcanas, DamageTypes, DamageEffectiveness, Effectiveness } from '../../models/persona';
import { PersonaService } from '../../services/persona.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-persona-detail',
  templateUrl: './persona-detail.component.html',
  styleUrls: ['./persona-detail.component.css'],
})
export class PersonaDetailComponent implements OnInit, OnChanges {
  @Input() persona: Persona;
  @Input() edit: boolean;
  @Input() id: number;
  public PersonaTypes = PersonaTypes;
  public Arcanas = Arcanas;
  public Effectiveness = Effectiveness;
  public weaknesses: DamageTypes[];
  constructor(private personaService: PersonaService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    if (!this.persona) {
      this.route.paramMap.subscribe(map => {
        this.id = parseInt(map.get('id'));
      });
      this.persona = new Persona;
      this.persona.type = PersonaTypes.Gloomy;
      this.persona.id = null;
      this.persona.damageEffectiveness = new DamageEffectiveness();
      if (this.id) {
        this.get();
      }
    }
    this.personaService.updated.subscribe(() => { if (this.id) { this.get(); } });
    this.weaknesses = this.getWeaknesses();
  }

  ngOnChanges() {
    this.weaknesses = this.getWeaknesses();
  }

  public get(): void {
    this.personaService.getPersona(this.id)
      .subscribe(p => {
        this.persona = p;
        if (!this.persona.damageEffectiveness) {

          this.persona.damageEffectiveness = new DamageEffectiveness();
        }
        this.weaknesses = this.getWeaknesses();
      });
  }

  public add(): void {
    console.log(`adding persona: ${JSON.stringify(this.persona)}`);
    this.personaService.addPersona(this.persona).subscribe((p: Persona) => {
      this.personaService.updated.next();
      this.location.back();
    });
  }
  public save(): void {
    this.personaService.savePersona(this.persona).subscribe((p: Persona) => {
      this.personaService.updated.next();
      this.location.back();
    });
  }

  getTypesByEffectiveness(damageEffectiveness: DamageEffectiveness, level: Effectiveness): DamageTypes[] {
    const types: DamageTypes[] = [];
    if (damageEffectiveness.physical === level) { types.push(DamageTypes.Physical); }
    if (damageEffectiveness.gun === level) { types.push(DamageTypes.Gun); }
    if (damageEffectiveness.fire === level) { types.push(DamageTypes.Fire); }
    if (damageEffectiveness.ice === level) { types.push(DamageTypes.Ice); }
    if (damageEffectiveness.electric === level) { types.push(DamageTypes.Electric); }
    if (damageEffectiveness.wind === level) { types.push(DamageTypes.Wind); }
    if (damageEffectiveness.psychic === level) { types.push(DamageTypes.Psychic); }
    if (damageEffectiveness.nuclear === level) { types.push(DamageTypes.Nuclear); }
    if (damageEffectiveness.bless === level) { types.push(DamageTypes.Bless); }
    if (damageEffectiveness.curse === level) { types.push(DamageTypes.Curse); }
    if (damageEffectiveness.almighty === level) { types.push(DamageTypes.Almighty); }

    return types;
  }

  public getWeaknesses(): DamageTypes[] {
    if (this.persona && this.persona.damageEffectiveness) {
      return this.getTypesByEffectiveness(this.persona.damageEffectiveness, Effectiveness.Weak);
    } else {
      return [];
    }
  }
}
