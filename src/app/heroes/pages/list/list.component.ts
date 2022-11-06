import { Component, OnInit } from '@angular/core';

import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  heroes: Hero[] = [];
  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(resp => this.heroes = resp);
  }

  deleteHero(id: string) {
    this.heroesService.deleteHero(id).subscribe();
    this.heroes = this.heroes.filter(hero => hero.id !== id);
  }

}
