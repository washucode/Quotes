import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-qoute-item',
  templateUrl: './qoute-item.component.html',
  styleUrls: ['./qoute-item.component.css']
})
export class QouteItemComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, 'Esther','WAchuka','Do something soon'),

  ];
  removeQuote(deleteQuote,index){
    if(deleteQuote){
      this.quotes.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
