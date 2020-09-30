import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { CreerCollegueComponent } from './creer-collegue/creer-collegue.component'; 
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import {MenuComponent} from './menu/menu.component';
import { PageAcceuilComponent } from './pages/page-acceuil/page-acceuil.component';
import { PageGalerieComponent } from './pages/page-galerie/page-galerie.component';
import { PageAproposComponent } from './pages/page-apropos/page-apropos.component';
import { PageCreerCollegueComponent } from './pages/page-creer-collegue/page-creer-collegue.component'
import { RouterModule, Routes } from '@angular/router';
import { ModifierCollegueComponent } from './modifier-collegue/modifier-collegue.component';
import { SupprimerCollegueComponent } from './supprimer-collegue/supprimer-collegue.component';



const routes : Routes = [
{path :'acceuil',component:PageAcceuilComponent},
{path :'galerie',component:PageGalerieComponent},
{path :'apropos',component:PageAproposComponent},
{path:'creer-collegue',component:PageCreerCollegueComponent},
{path:'',pathMatch:'full',redirectTo:'/acceuil'}

]



@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    CreerCollegueComponent,
    MenuComponent,
    PageAcceuilComponent,
    PageGalerieComponent,
    PageAproposComponent,
    PageCreerCollegueComponent,
    ModifierCollegueComponent,
    SupprimerCollegueComponent,
  
    
    
  ],

  imports: [
    BrowserModule,
    HttpClientModule,  //module qui permet de faire des appels HHTP
    FormsModule,
    RouterModule.forRoot(routes) // config router 
  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }