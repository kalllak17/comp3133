import { Component } from '@angular/core';
import {HEROES} from '../mock-heroes';
import {RemoveSpacesPipe} from '../remove-spaces-pipe'
import { HeroDetail } from '../hero-detail/hero-detail';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  imports: [RemoveSpacesPipe, HeroDetail],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css',
})
export class Heroes {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
