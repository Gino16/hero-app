import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/heroes/components/confirm-dialog/confirm-dialog.component';
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

  @Output()
  idEvent = new EventEmitter<string>();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteDialog() {
    this.dialog.open(ConfirmDialogComponent, {
      data: `¿Está seguro de eliminar a ${this.hero.superhero}?`
    })
    .afterClosed()
    .subscribe((confirm: Boolean) => {
      if (confirm) {
        this.idEvent.emit(this.hero.id);
      } else {
        console.log('cancelado');
      }
    })
  }

}
