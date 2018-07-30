import {PersonaType, Arcanas} from './typeDefs';

export class Persona {
  id: number;
  name: string;
  codeName: string;
  type: PersonaType;
  arcana: Arcanas;
}
