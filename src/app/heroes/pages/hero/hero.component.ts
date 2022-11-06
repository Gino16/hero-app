import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [`
    img {
      width: 100%;
    }
  `]
})
export class HeroComponent implements OnInit {

  hero!: Hero;

  constructor(private route: ActivatedRoute, private heroesService: HeroesService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({ id }) => this.heroesService.getHeroById(id))
    ).subscribe(res => this.hero = res);
  }

  regresar() {
    this.router.navigate(['/heroes/list']);
  }
}
