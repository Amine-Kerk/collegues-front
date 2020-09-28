import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';

import { HttpClientModule } from '@angular/common/http';
import { FormCreationComponent } from './form-creation/form-creation.component';
import { FormsModule } from '@angular/forms';
import { CreerCollegueComponentComponent } from './creer-collegue-component/creer-collegue-component.component'

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    FormCreationComponent,
    CreerCollegueComponentComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
