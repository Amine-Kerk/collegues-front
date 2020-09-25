import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {



 
  col: Collegue;

  modeAffichage = true;


  constructor(private _serv:DataService) { 
    this.col = this._serv.recupererCollegueCourant();
  }


  ngOnInit(): void {
  }

  modifierCollegue():void {
    this.modeAffichage = false;
    console.log("Modification du collègue");
  }

  creerCollegue() :void {
    console.log("Création de collègue");
  }

  validerModif():void {
    this.modeAffichage = true;
  }


}
