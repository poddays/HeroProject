import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardHeroListService } from '../app/card/services/card-hero-list.service';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    
  ],
  imports: [
    BrowserModule,

  ],
  providers: [CardHeroListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
