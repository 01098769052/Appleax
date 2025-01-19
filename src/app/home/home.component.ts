import { FlowbiteService } from './../flowbite.service';
import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { MealsComponent } from '../meals/meals.component';
import { HomeCardComponent } from '../home-card/home-card.component';

@Component({
  selector: 'app-home',
  imports: [SliderComponent, MealsComponent, HomeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private FlowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.FlowbiteService.loadFlowbite((flowbite) => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
}
