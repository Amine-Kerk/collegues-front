import { Component, Input, OnInit } from '@angular/core';
import {matricules} from '../mock/matricules.mock'
@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  @Input()
  
  liste:any[];
  rechercher= false;


  constructor() { }

  ngOnInit(): void {
  }

  rechercherParNom(nom:string) {
    if(nom=="Amine") {
      this.rechercher = true;
      this.liste = matricules;
    } else {
      this.rechercher = false;
    }

}
}