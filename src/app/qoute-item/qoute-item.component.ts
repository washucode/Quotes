import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-qoute-item',
  templateUrl: './qoute-item.component.html',
  styleUrls: ['./qoute-item.component.css']
})
export class QouteItemComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(0,0,1, 'Audre Lorde','Wachuka','When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.',new Date(2019,1,12)),
    new Quotes(0,0,2, 'Oscar Wilde','Wachuka','To live is the rarest thing in the world. Most people exist, that is all',new Date(2019,1,12)),
    new Quotes(0,0,2, 'Andre Gide, Autumn Leaves','Wachuka','It is better to be hated for what you are than to be loved for what you are not.',new Date(2019,1,12)),

  ];

//   let a =this.quotes[index].upVote;
//   let b =this.quotes[index].downVote;
//
//   let sortedQuotes = quotes.sort((a,b) => {
//   return b - a;
// });

  firstQuote() {
  return this.quotes[0];
   }


  removeQuote(deleteQuote,index){
    if(deleteQuote){
      let forDelete = confirm(`Are you sure you want to delete this quote by ${this.quotes[index].author}?`)
      if (forDelete){
        this.quotes.splice(index,1);
        }

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
