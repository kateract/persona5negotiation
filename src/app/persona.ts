import {PersonaTypes, Arcanas, DamageTypes, DamageEffectiveness, DamageEffectivenessTypes} from './personaTypeDefs';

export class Persona {
  id: string;
  name: string;
  codeName: string;
  type: PersonaTypes;
  arcana: Arcanas;
  damageEffectiveness: DamageEffectiveness[];

  constructor() {
    this.damageEffectiveness = [
      {type: DamageTypes.Physical, effectiveness: DamageEffectivenessTypes.Normal},
      {type: DamageTypes.Gun, effectiveness: DamageEffectivenessTypes.Normal},
      {type: DamageTypes.Fire, effectiveness: DamageEffectivenessTypes.Normal},
      {type: DamageTypes.Ice, effectiveness: DamageEffectivenessTypes.Normal},
      {type: DamageTypes.Electric, effectiveness: DamageEffectivenessTypes.Normal},
      {type: DamageTypes.Wind, effectiveness: DamageEffectivenessTypes.Normal},
      {type: DamageTypes.Psychic, effectiveness: DamageEffectivenessTypes.Normal},
      {type: DamageTypes.Nuclear, effectiveness: DamageEffectivenessTypes.Normal},
      {type: DamageTypes.Bless, effectiveness: DamageEffectivenessTypes.Normal},
    ];
  }

  public weaknesses(): DamageTypes[] {
    return this.damageEffectiveness.filter(d => d.effectiveness === DamageEffectivenessTypes.Weak).map(t => t.type);
  }
}
