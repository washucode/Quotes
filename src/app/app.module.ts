import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QoutesFormComponent } from './qoutes-form/qoutes-form.component';
import { QouteItemComponent } from './qoute-item/qoute-item.component';
import { HighlightDirective } from './highlight.directive';
import { SortPipe } from './sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailComponent,
    QoutesFormComponent,
    QouteItemComponent,
    HighlightDirective,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
