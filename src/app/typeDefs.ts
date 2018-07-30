export enum PersonaTypes {
  Upbeat,
  Timid,
  Irritable,
  Gloomy
}

export class PersonaType {
  name: string;
  type: PersonaTypes;
  like: AnswerTypes;
  dislike: AnswerTypes[];

  constructor(type: PersonaTypes) {
    switch (type) {
      case PersonaTypes.Upbeat:
        this.name = 'Upbeat';
        this.type = type;
        this.like = AnswerTypes.Funny;
        this.dislike = [AnswerTypes.Serious, AnswerTypes.Vague];
        break;
      case PersonaTypes.Timid:
        this.name = 'Timid';
        this.type = type;
        this.like = AnswerTypes.Kind;
        this.dislike = [AnswerTypes.Vague, AnswerTypes.Funny];
        break;
      case PersonaTypes.Irritable:
        this.name = 'Irritable';
        this.type = type;
        this.like = AnswerTypes.Serious;
        this.dislike = [AnswerTypes.Vague, AnswerTypes.Kind]
        break;
      case PersonaTypes.Gloomy:
        this.name = 'Gloomy';
        this.type = type;
        this.like = AnswerTypes.Vague;
        this.dislike = [AnswerTypes.Serious, AnswerTypes.Funny];
        break;
    }
  }
}

export enum AnswerTypes {
  Funny,
  Kind,
  Serious,
  Vague
}

export enum Arcanas {
  Fool,
  Magician,
  Priestess,
  Emperor,
  Hierophant,
  Lovers,
  Chariot,
  Justice,
  Hermit,
  Fortune,
  Strength,
  Hanged,
  Death,
  Temperance,
  Devil,
  Star,
  Moon,
  Sun,
  Judge
}

export enum DamageTypes {
  Physical,
  Gun,
  Fire,
  Ice,
  Shock,
  Wind,
  Psy,
  Nuke,
  Light,
  Death
}
