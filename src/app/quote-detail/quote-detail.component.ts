import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quotes;
  @Output() deleteQuote = new EventEmitter<boolean>();
  quoteDelete(deleteQ:boolean){
    this.deleteQuote.emit(deleteQ);
  }
  constructor(){ }

  ngOnInit() {
  }

}
