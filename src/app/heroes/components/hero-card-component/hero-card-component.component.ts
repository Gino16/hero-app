import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-hero-card-component',
  templateUrl: './hero-card-component.component.html',
  styles: [`
    mat-card {
      margin-top: 15px;
    }
  `]
})
export class HeroCardComponentComponent implements OnInit {

  @Input()
  hero!: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
