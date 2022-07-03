import {AnswerTypes } from './question';

export class Persona {
  id: number;
  name: string;
  codeName: string;
  type: PersonaTypes;
  arcana: Arcanas;
  damageEffectiveness: DamageEffectiveness;
  constructor() {
    this.damageEffectiveness = new DamageEffectiveness();
  }
}

export enum PersonaTypes {
  Upbeat = 'Upbeat',
  Timid = 'Timid',
  Irritable = 'Irritable',
  Gloomy = 'Gloomy'
}

export namespace PersonaTypes {
  export function values(): string[] {
    return Object.keys(PersonaTypes).filter((type) => isNaN(<any>type) && type !== 'values');
  }
}

export class PersonaType {
  type: PersonaTypes;
  like: AnswerTypes;
  dislike: AnswerTypes[];

  constructor(type: PersonaTypes) {
    this.type = type;
    switch (type) {
      case PersonaTypes.Upbeat:
        this.like = AnswerTypes.Funny;
        this.dislike = [AnswerTypes.Serious, AnswerTypes.Vague];
        break;
      case PersonaTypes.Timid:
        this.like = AnswerTypes.Kind;
        this.dislike = [AnswerTypes.Vague, AnswerTypes.Funny];
        break;
      case PersonaTypes.Irritable:
        this.like = AnswerTypes.Serious;
        this.dislike = [AnswerTypes.Vague, AnswerTypes.Kind];
        break;
      case PersonaTypes.Gloomy:
        this.like = AnswerTypes.Vague;
        this.dislike = [AnswerTypes.Serious, AnswerTypes.Funny];
        break;
    }
  }
}

export enum Arcanas {
  Fool = 'Fool',
  Magician = 'Magician',
  Priestess = 'Priestess',
  Empress = 'Empress',
  Emperor = 'Emperor',
  Hierophant = 'Hierophant',
  Lovers = 'Lovers',
  Chariot = 'Chariot',
  Justice = 'Justice',
  Hermit = 'Hermit',
  Fortune = 'Fortune',
  Strength = 'Strength',
  Hanged = 'Hanged',
  Death = 'Death',
  Temperance = 'Temperance',
  Devil = 'Devil',
  Tower = 'Tower',
  Star = 'Star',
  Moon = 'Moon',
  Sun = 'Sun',
  Judgement = 'Judgement'
}

export namespace Arcanas {
  export function values() {
    return Object.keys(Arcanas).filter((type) => isNaN(<any>type) && type !== 'values');
  }
}


export enum DamageTypes {
  Physical = 'Physical',
  Gun = 'Gun',
  Fire = 'Fire',
  Ice = 'Ice',
  Electric = 'Electric',
  Wind = 'Wind',
  Psychic = 'Psychic',
  Nuclear = 'Nuclear',
  Bless = 'Bless',
  Curse = 'Curse',
  Almighty = 'Almighty'
}

export enum Effectiveness {
  Normal = 'Normal',
  Strong = 'Strong',
  Weak = 'Weak',
  Null = 'Null',
  Drain = 'Drain'
}

export namespace Effectiveness {
  export function values() {
    return Object.keys(Effectiveness).filter((type) => isNaN(<any>type) && type !== 'values');
  }
}

export class DamageEffectiveness {
  id: number;
  personaId: number;
  physical: Effectiveness = Effectiveness.Normal;
  gun: Effectiveness = Effectiveness.Normal;
  fire: Effectiveness = Effectiveness.Normal;
  ice: Effectiveness = Effectiveness.Normal;
  electric: Effectiveness = Effectiveness.Normal;
  wind: Effectiveness = Effectiveness.Normal;
  psychic: Effectiveness = Effectiveness.Normal;
  nuclear: Effectiveness = Effectiveness.Normal;
  bless: Effectiveness = Effectiveness.Normal;
  curse: Effectiveness = Effectiveness.Normal;
  almighty: Effectiveness = Effectiveness.Normal;
}
