import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
@Input() col : Collegue;
  
  

  ngOnInit() {
  }

  modifierCollegue() {
    console.log("Modification du collègue");
  }

  creerCollegue() {
    console.log("Création de collègue");
  }




}
