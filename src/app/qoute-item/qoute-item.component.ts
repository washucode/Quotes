import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-qoute-item',
  templateUrl: './qoute-item.component.html',
  styleUrls: ['./qoute-item.component.css']
})
export class QouteItemComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, 'Audre Lorde','WAchuka','When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.'),

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
