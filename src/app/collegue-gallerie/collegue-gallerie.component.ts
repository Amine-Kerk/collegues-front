
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue-gallerie',
  templateUrl: './collegue-gallerie.component.html',
  styleUrls: ['./collegue-gallerie.component.css']
})
export class CollegueGallerieComponent implements OnInit {

  matricule:string;
  collegue:Collegue;
  erreur:string;
  actionSub:Subscription;

  
constructor(private route: ActivatedRoute, private dataSrv: DataService) {}

ngOnInit(): void {
  this.actionSub = this.route.paramMap.subscribe((params:ParamMap) => {
    this.matricule = params.get('matricule');
    this.dataSrv.selectionnerMatricule(this.matricule).subscribe(collegue => {
      this.collegue = collegue;
    },
    (error:HttpErrorResponse) => {
      this.erreur = error.status + ' - ' + error.error;
    })
  })
}

ngOnDestroy(): void {
  this.actionSub.unsubscribe();
}


}