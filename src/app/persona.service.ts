import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { Observable, Subject } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private personasUrl = 'http://crescendo:3000/api/personas';
  public updated = new Subject<any>();
  getPersonas(): Observable<Persona[]> {
    this.messageService.add('PersonaService: fetched Personas');
    return this.http.get<Persona[]>(this.personasUrl);
  }

  getPersona(id: string): Observable<Persona> {
    this.messageService.add(`PersonaService: fetched Persona id=${id}`);
    return this.http.get<Persona>(`${this.personasUrl}/${id}`);
  }

  addPersona(persona: Persona): Observable<Persona> {
    console.log(`adding persona: ${JSON.stringify(persona)}`);
    return this.http.post<Persona>(this.personasUrl, persona);
  }

  editPersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(this.personasUrl, persona);
  }

  deletePersona(persona: Persona): void {
    this.http.delete(`${this.personasUrl}/${persona.id}`);
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }
}
