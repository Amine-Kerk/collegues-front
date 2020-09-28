import { Component, OnInit } from '@angular/core';
import { CreerCollegueForm } from './creer-collegue-form';
import { DataService } from './../services/data.service';


@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html',
  styleUrls: ['./creer-collegue.component.css']
})
export class CreerCollegueComponent implements OnInit {

  creerCol: CreerCollegueForm = {
    nom: 'Odd',
    prenoms: 'Ross',
    dateDeNaissance: '2020-01-09',
    email: 'ross@odd.fr',

    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' // ??

  };

  erreurTechnique = false;


  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {

  }


  creer(): void {
    this.dataSrv.creerCollegue(this.creerCol).subscribe(
      col => {
        this.creerCol = {};
      },
      error => this.erreurTechnique = true
    );
  }



}
