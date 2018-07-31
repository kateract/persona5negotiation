import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { PERSONAS } from './personas';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personas = PERSONAS;
  getPersonas(): Observable<Persona[]> {
    this.messageService.add('PersonaService: fetched Personas');
    return of(this.personas);
  }

  getPersona(id: number): Observable<Persona> {
    this.messageService.add(`PersonaService: fetched Persona id=${id}`);
    return of(this.personas.find(persona => persona.id === id));
  }

  addPersona(persona: Persona): void {
    let id = 0;
    id = this.personas.map(p => p.id).reduce((a, b) => a > b ? a : b);
    persona.id = id + 1;
    this.personas.push(persona);
  }

  editPersona(persona: Persona): void {
    this.personas.splice(this.personas.findIndex(p => p.id === persona.id), 1);
    this.personas.push(persona);
  }

  constructor(private messageService: MessageService) { }
}
