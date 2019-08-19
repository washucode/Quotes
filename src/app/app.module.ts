import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';

import { QouteItemComponent } from './qoute-item/qoute-item.component';
import { HighlightDirective } from './highlight.directive';

import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FormsModule } from '@angular/forms';
import { TimeAgoPipe } from './time-ago.pipe';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailComponent,

    QouteItemComponent,
    HighlightDirective,

    QuoteFormComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
