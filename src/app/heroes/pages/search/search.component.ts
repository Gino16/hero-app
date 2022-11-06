import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  term: string = '';
  heroes: Hero[] = [];
  heroSelected!: Hero | undefined;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
  }

  searching() {
    this.heroesService.searchHero(this.term)
      .subscribe(res => this.heroes = res);
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.heroSelected = undefined;
      return;
    }
    const hero: Hero = event.option.value;
    this.term = hero.superhero;

    this.heroesService.getHeroById(hero.id!)
      .subscribe(hero => this.heroSelected = hero);
  }

}
