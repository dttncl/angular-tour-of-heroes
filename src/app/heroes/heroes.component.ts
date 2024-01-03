import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';

import { Hero } from '../hero';

@Component({ 
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule,  FormsModule, NgFor],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {
  //hero = 'Windstorm';
  /*hero : Hero = {
    id: 1,
    name: 'Windstorm'
  };*/
  heroes = HEROES;
}