import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit {

  publishers = [
    {
      id: 'DC comics',
      desc: 'DC-comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Comics de Marvel'
    }
  ]

  hero: Hero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  constructor(private route: ActivatedRoute, private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => console.log(params['id']));
  }

  save() {
    if (this.hero.superhero.trim().length === 0) {
      console.log('hola')
      return;
    }
    this.heroesService.saveHero(this.hero).subscribe(resp => console.log(resp));
  }

}
