import { Component } from '@angular/core';
import {collegueMock} from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  collegueExemple=collegueMock;
  title = 'collegues-front';
}
