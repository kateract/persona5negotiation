import {PersonaTypes, Arcanas} from './typeDefs';

export class Persona {
  id: string;
  name: string;
  codeName: string;
  type: PersonaTypes;
  arcana: Arcanas;
}
