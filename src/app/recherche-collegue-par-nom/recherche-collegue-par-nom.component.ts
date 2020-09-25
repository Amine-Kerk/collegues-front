import { Component, Input, OnInit } from '@angular/core';
import {matriculesMock} from '../mock/matricules.mock'
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  @Input()

  listeMatricules: string[];

  matriculeNonTrouve = false;
  erreurTechnique = false;


  constructor(private _serv: DataService) { }

  ngOnInit(): void {
  }

  rechercherCol(nomSaisi: string): void {
    this.listeMatricules = null; // effacer les matricules affichés
    this._serv.rechercherParNom(nomSaisi)
      .subscribe(matriculesBack => {
        this.erreurTechnique = false;
        if (matriculesBack.length > 0) {
          this.matriculeNonTrouve = false;
          this.listeMatricules = matriculesBack;
        } else {
          this.matriculeNonTrouve = true;
        }

      },
        error => this.erreurTechnique = true);
  }

}