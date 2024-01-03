import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({ 
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule,  FormsModule, NgFor, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {

  selectedHero?: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  //hero = 'Windstorm';
  /*hero : Hero = {
    id: 1,
    name: 'Windstorm'
  };*/
  heroes = HEROES;
}
