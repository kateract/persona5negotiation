import { Injectable } from '@angular/core';
import { Persona, DamageEffectiveness } from '../models/persona';
import { Observable, Subject, forkJoin } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private personasUrl = 'http://crescendo:3000/api/personas';
  private damageEffUrl = 'http://crescendo:3000/api/damageEffectivenesses';
  public updated = new Subject<any>();
  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.personasUrl}/?filter={"include":"damageEffectiveness"}`);
  }

  getPersona(id: string): Observable<Persona> {
    return this.http.get<Persona>(`${this.personasUrl}/${id}/?filter={"include":"damageEffectiveness"}`);
  }

  addPersona(persona: Persona): Observable<Persona> {
    return Observable.create(observer => {
      console.log(JSON.stringify(persona));
      this.http.post<Persona>(this.personasUrl, persona).subscribe(p => {
        console.log(JSON.stringify(persona));
        persona.damageEffectiveness.personaId = p.id;
        persona.damageEffectiveness.id = null;
        this.addDamageEffectiveness(p.id, persona).subscribe(d => {
          p.damageEffectiveness = d;
          observer.next(p);
          observer.complete();
        });
      });
    });
  }

  savePersona(persona: Persona): Observable<Persona> {
    console.log(JSON.stringify(persona));
    return Observable.create(observer => {
      this.http.put<Persona>(this.personasUrl, persona).subscribe(p => {
        persona.damageEffectiveness.personaId = p.id;
        this.saveDamageEffectiveness(persona.damageEffectiveness).subscribe(d => {
          p.damageEffectiveness = d;
          observer.next(p);
          observer.complete();
        });
      });
    });
  }

  deletePersona(persona: Persona): void {
    this.http.delete(`${this.personasUrl}/${persona.id}`);
  }

  addDamageEffectiveness(personaId: string, persona: Persona): Observable<DamageEffectiveness> {
    return this.http.post<DamageEffectiveness>(`${this.personasUrl}/${personaId}/damageEffectiveness/`, persona.damageEffectiveness);
  }

  saveDamageEffectiveness(damageEffectiveness: DamageEffectiveness): Observable<DamageEffectiveness> {
    return this.http.put<DamageEffectiveness>(this.damageEffUrl, damageEffectiveness);
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }
}
