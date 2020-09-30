import { Component, OnInit } from '@angular/core';
import {  Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { DataService } from 'src/app/services/data.service';
import { PhotoDTO } from 'src/app/models/PhotoDTO';





@Component({
  selector: 'app-page-galerie',
  templateUrl: './page-galerie.component.html',
  styleUrls: ['./page-galerie.component.css']
})
export class PageGalerieComponent implements OnInit {

  listePhotosDTO: PhotoDTO[];
  erreur:string;
  actionSub: Subscription

  constructor(private _serv: DataService) { }

  ngOnInit(){
    this.actionSub = this._serv.rechercherPhotos().subscribe(PhotosDTOVenusDuServeur => {
      this.listePhotosDTO = PhotosDTOVenusDuServeur;
    }), (error: HttpErrorResponse) => {
      this.erreur = error.status + ' - ' + error.error;
    }
  }
  

}
