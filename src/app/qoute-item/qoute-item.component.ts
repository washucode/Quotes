import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-qoute-item',
  templateUrl: './qoute-item.component.html',
  styleUrls: ['./qoute-item.component.css']
})
export class QouteItemComponent implements OnInit {

  quotes: Quotes[] = [
    {id:1, author:'Esther',name:'WAchuka',details:'Do something soon'},

  ];

  constructor() { }

  ngOnInit() {
  }
}
