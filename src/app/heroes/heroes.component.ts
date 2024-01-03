import { Component, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';

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
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
    // not the best practice
    // use ngOnInit instead
    // this.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    //generate list of heroes synchronously
    //requests the list before it loads the website
    //this.heroes = this.heroService.getHeroes();

    //generate list of heroes ASYNCHRONOUSLY
    //waits for the Observable to produce the array of heroes
    //subscriber passes the generated list then sets the component's list of heroes
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  
  }

}
