import { environment } from './../../environments/environment';
import {collegueMock} from '../mock/collegues.mock'
import  {matriculesMock} from '../mock/matricules.mock'
import {Collegue} from '../models/Collegue';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  rechercherParNom(nom: string): Observable<string[]> {
    return this.http.get<string[]>(`${environment.backendUrl}?nom=${nom}`);
  }

    recupererCollegueCourant(): Collegue {
    // TODO retourner le collègue fictif à partir du fichier
 // `src/app/mock/collegues.mock.ts`.
   return collegueMock
    }
}