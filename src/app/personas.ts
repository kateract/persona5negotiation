import { Persona } from './persona';
import { PersonaType, PersonaTypes, Arcanas } from './typeDefs';

export const PERSONAS: Persona[] = [
  {
    id: "1",
    name: 'Jack O\' Lantern',
    codeName: 'Crypt-dwelling Pyromaniac',
    type: new PersonaType(PersonaTypes.Gloomy),
    arcana: Arcanas.Magician
  },
  {
    id: "2",
    name: 'Mandrake',
    codeName: 'Gallows Flower',
    type: new PersonaType(PersonaTypes.Upbeat),
    arcana: Arcanas.Death
  },
  {
    id: "3",
    name: 'Incubus',
    codeName: 'Bedside Brute',
    type: new PersonaType(PersonaTypes.Upbeat),
    arcana: Arcanas.Devil
  },
  {
    id: "4",
    name: 'Kelpie',
    codeName: 'Horse/Mad Marsh Horse',
    type: new PersonaType(PersonaTypes.Upbeat),
    arcana: Arcanas.Strength
  },
  {
    id: "5",
    name: 'Silky',
    codeName: 'Troublesome Housemaid',
    type: new PersonaType(PersonaTypes.Gloomy),
    arcana: Arcanas.Priestess
  },
  {
    id: "6",
    name: 'Succubus',
    codeName: 'Twilight Prostitute',
    type: new PersonaType(PersonaTypes.Irritable),
    arcana: Arcanas.Moon
  },
  {
    id: "7",
    name: 'Berith',
    codeName: 'Brutal Cavalryman',
    type: new PersonaType(PersonaTypes.Irritable),
    arcana: Arcanas.Hierophant
  },
  {
    id: "8",
    name: 'Andras',
    codeName: 'Menacing Owlman',
    type: new PersonaType(PersonaTypes.Irritable),
    arcana: Arcanas.Devil
  },
  {
    id: "9",
    name: 'Agathion',
    codeName: 'Apprentice in a Jug',
    type: new PersonaType(PersonaTypes.Timid),
    arcana: Arcanas.Chariot
  },
  {
    id: "100",
    name: 'Rangda',
    codeName: 'Apprentice in a Jug',
    type: new PersonaType(PersonaTypes.Gloomy),
    arcana: Arcanas.Magician
  },
  {
    id: "101",
    name: 'Kumbhanda',
    codeName: 'Life Draining Spirit',
    type: new PersonaType(PersonaTypes.Irritable),
    arcana: Arcanas.Hermit
  },
  {
    id: "102",
    name: 'Norn',
    codeName: 'Final Assessor',
    type: new PersonaType(PersonaTypes.Upbeat),
    arcana: Arcanas.Fortune
  },
  {
    id: "103",
    name: 'Skadi',
    codeName: 'Quaking Lady of Shadow',
    type: new PersonaType(PersonaTypes.Timid),
    arcana: Arcanas.Priestess
  }
];
