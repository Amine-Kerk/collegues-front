import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {


  @Input() col: Collegue;
 
 
  modeCreation = false;
  modeAffichage = true;


  constructor(private _serv:DataService) { 
  }
  ngOnInit():void{
    this.col = this._serv.recupererCollegueCourant();
  }

  modifierCollegue() {
    this.modeAffichage = false;
    
  }

  creerCollegue()  {
    console.log('Créer un nouveau collègue');
    this.modeCreation = true;

  }

  validerModif() {
    this.modeAffichage = true;
  }


}
