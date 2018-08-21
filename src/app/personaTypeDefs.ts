import { NgModule, Pipe, PipeTransform } from '@angular/core';

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

export enum AnswerTypes {
  Funny = 'Funny',
  Kind = 'Kind',
  Serious = 'Serious',
  Vague = 'Vague'
}

export namespace AnswerTypes {
  export function values(): string[] {
    return Object.keys(AnswerTypes).filter((type) => isNaN(<any>type) && type !== 'values');
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

export enum DamageEffectivenessTypes {
  Normal = '',
  Strong = 'Str',
  Weak = 'Wk',
  Null = 'Nul',
  Drain = 'Dr'
}

export class DamageEffectiveness {
  public type: DamageTypes;
  public effectiveness: DamageEffectivenessTypes;
}
