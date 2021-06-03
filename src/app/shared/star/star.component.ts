import { Component, OnChanges, Input } from '@angular/core';
@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input()
  rating: 0;
  starWidth: number;

  // Calculo para mostrar a estrela parcialmente conforme a nota do rating
  ngOnChanges(): void {
    this.starWidth = this.rating * 94 / 10;
  }
}
