import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MealsComponent } from './meals/meals.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { PastaComponent } from './pasta/pasta.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { AbouttComponent } from './aboutt/aboutt.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AbouttComponent, title: 'About' },
  { path: 'contacts', component: ContactComponent, title: 'Contact' },
  { path: '**', component: NotfoundComponent, title: 'OooopS' },
];
