import { Component, OnInit } from '@angular/core';
import { ICard } from '../card/interfaces/card.Interface';
import { CardHeroListService } from './services/card-hero-list.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private heroService: CardHeroListService) { }

  heroes:ICard[] = []

  getHeroList(){
    this.heroes = this.heroService.getHeroes();
  }
 
  ngOnInit(): void {
   this.getHeroList()
   console.log(this.heroes);
  
  }

}
