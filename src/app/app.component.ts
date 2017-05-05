import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reste à vivre';
  nbJourPrDivision ;
   tiles = [
    {text: 'Crédit', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Débit', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Résultat', cols: 2, rows: 1, color: 'lightblue'}
  ];


  setNbJourPrDivision(event){
    this.nbJourPrDivision = event;
  }
}

