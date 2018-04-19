import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

//The parameter simultaneously defines a private heroService property
// and identifies it as a HeroService injection site.
//Reserve the constructor for simple initialization
//such as wiring constructor parameters to properties.
//The constructor shouldn't do anything. It certainly shouldn't call a
// function that makes HTTP requests
//to a remote server as a real data service would.

constructor(private heroService: HeroService) { }
  ngOnInit() {
    this.getHeroes();
  }

//ASYNCHRONOUS APPROACH
  /*The new version waits for the Observable to emit
  the array of heroes— which could happen now or several minutes from now.
  Then subscribe passes the emitted array to the callback,
   which sets the component's heroes property.*/
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
