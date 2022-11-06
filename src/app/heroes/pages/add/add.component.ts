import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px
    }
  `]
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

  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router,
    private snackBar: MatSnackBar
    ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }
    this.route.params.pipe(
      switchMap(({ id }) => this.heroesService.getHeroById(id))
    ).subscribe(hero => this.hero = hero);
  }

  save() {
    if (this.hero.superhero.trim().length === 0) {
      console.log('hola')
      return;
    }
    if (this.hero.id) {
      this.heroesService.updateHero(this.hero).subscribe();
    } else {
      this.heroesService.saveHero(this.hero).subscribe();
    }

    this.router.navigate(['/heroes']).then(() => {
      this.snackBar.open('Heroe guardado', 'ok!', {
        duration: 5000
        });
    });
  }

}
