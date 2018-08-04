import {PersonaType, Arcanas} from './typeDefs';

export class Persona {
  id: string;
  name: string;
  codeName: string;
  type: PersonaType;
  arcana: Arcanas;
}
