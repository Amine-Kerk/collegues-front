import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {



  @Input() col: Collegue;

  modeAffichage = true;


  constructor() { }


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
