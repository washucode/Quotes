import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-qoute-item',
  templateUrl: './qoute-item.component.html',
  styleUrls: ['./qoute-item.component.css']
})
export class QouteItemComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(0,0,1, 'Audre Lorde','Wachuka','When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.'),

  ];
  removeQuote(deleteQuote,index){
    if(deleteQuote){
      this.quotes.splice(index,1);
    }
  }
    toggleNameDate(index){
      this.quotes[index].showDateName=!this.quotes[index].showDateName;
    }


  upvoteCounter(index){
    this.quotes[index].upVote ++;
  }
  downvoteCounter(index){
      this.quotes[index].downVote ++;
  }

  constructor() {
   }

  ngOnInit() {
  }
}
