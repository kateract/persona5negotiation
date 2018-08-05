import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { PERSONAS } from './personas';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personas = PERSONAS;
  getPersonas(): Observable<Persona[]> {
    this.messageService.add('PersonaService: fetched Personas');
    return of(this.personas);
  }

  getPersona(id: string): Observable<Persona> {
    this.messageService.add(`PersonaService: fetched Persona id=${id}`);
    return of(this.personas.find(persona => persona.id === id));
  }

  addPersona(persona: Persona): void {
    this.personas.push(persona);
  }

  editPersona(persona: Persona): void {
    this.personas.splice(this.personas.findIndex(p => p.id === persona.id), 1);
    this.personas.push(persona);
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }
}
