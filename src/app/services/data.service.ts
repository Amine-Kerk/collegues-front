import { environment } from './../../environments/environment';
import {collegueMock} from '../mock/collegues.mock'
import  {matriculesMock} from '../mock/matricules.mock'
import {Collegue} from '../models/Collegue';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CreerCollegueForm } from './../creer-collegue/creer-collegue-form';

import { PhotoDTO } from '../models/PhotoDTO';


interface CollegueBack {
  id: number;
  matricule: string;
  nom: string;
  prenom: string;
  email: string;
  dateDeNaissance: string;
  photoUrl: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  private subCollegueSelectionne = new Subject <Collegue>();
  
  constructor(private http: HttpClient) { }


  rechercherParNom(nom: string): Observable<string[]> {
    return this.http.get<string[]>(`${environment.backendUrl}/collegues?nom=${nom}`);
  }
  recupererCollegueCourant(): Observable<Collegue> {
    return this.subCollegueSelectionne.asObservable();
  }
   selectionnerMatricule(matricule: string): Observable<Collegue>{
    return this.http.get<CollegueBack>(`${environment.backendUrl}/collegues/${matricule}`)
    .pipe(
      map(collegueBack => new Collegue(collegueBack.matricule, collegueBack.nom, collegueBack.prenom, collegueBack.email,
        new Date(collegueBack.dateDeNaissance), collegueBack.photoUrl)),
      tap(collegue => this.subCollegueSelectionne.next(collegue))
    );

  }
  creerCollegue(col: CreerCollegueForm): Observable<Collegue> {
    return this.http.post<CollegueBack>(
      `${environment.backendUrl}/collegues`,
      col)
      .pipe(
        map(colBack => new Collegue(colBack.matricule, colBack.nom, colBack.prenom, colBack.email,
          new Date(colBack.dateDeNaissance), colBack.photoUrl)));
  }

  rechercherPhotos():Observable<PhotoDTO[]> {
    return this.http.get<PhotoDTO[]>(`${environment.backendUrl}/collegues/photos`);
  }

} 