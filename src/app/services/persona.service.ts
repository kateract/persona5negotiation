import { Inject, Injectable } from '@angular/core';
import { Persona, DamageEffectiveness } from '../models/persona';
import { Observable, Subject, forkJoin } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_API_URL } from '../app.module';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private personasUrl = this.baseApiUrl + 'api/Persona';
  private damageEffUrl = this.baseApiUrl + 'api/DamageEffectiveness';
  public updated = new Subject<any>();
  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.personasUrl}/`);
  }

  getPersona(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.personasUrl}/${id}/`);
  }

  addPersona(persona: Persona): Observable<Persona> {
    return new Observable(observer => {
      let de = persona.damageEffectiveness;
//      delete persona.damageEffectiveness;
      this.http.post<Persona>(this.personasUrl, persona).subscribe(p => {
//        de.personaId = p.id;
 //       de.id = null;
//        this.addDamageEffectiveness(de).subscribe(d => {
//          p.damageEffectiveness = d;
          observer.next(p);
          observer.complete();
 //       });
      });
    });
  }

  savePersona(persona: Persona): Observable<Persona> {
    console.log(JSON.stringify(persona));
    return new Observable(observer => {
      //let de = persona.damageEffectiveness;
      //delete persona.damageEffectiveness;
      this.http.put<Persona>(`${this.personasUrl}/${persona.id}`, persona).subscribe(p => {
        // persona.damageEffectiveness.personaId = p.id;
        // this.saveDamageEffectiveness(de).subscribe(d => {
        //   p.damageEffectiveness = d;

        // });
        observer.next(p);
        observer.complete();
      });
    });
  }

  deletePersona(persona: Persona): void {
    this.http.delete(`${this.personasUrl}/${persona.id}`);
  }

  addDamageEffectiveness(damageEffectiveness: DamageEffectiveness): Observable<DamageEffectiveness> {
    return this.http.post<DamageEffectiveness>(this.damageEffUrl, damageEffectiveness);
  }

  saveDamageEffectiveness(damageEffectiveness: DamageEffectiveness): Observable<DamageEffectiveness> {
    return this.http.put<DamageEffectiveness>(`${this.damageEffUrl}/${damageEffectiveness.id}`, damageEffectiveness);
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    @Inject(BASE_API_URL) private baseApiUrl: string 
  ) { }
}
