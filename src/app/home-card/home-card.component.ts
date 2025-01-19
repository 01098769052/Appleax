import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-home-card',
  imports: [SliderComponent],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css',
})
export class HomeCardComponent {}
