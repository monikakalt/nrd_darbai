import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
//Removing data access from components means
// you can change your mind about the implementation
// anytime, without touching any components

@Injectable()
export class HeroService {

  /*This is a typical "service-in-service" scenario: you inject the MessageService
  into the HeroService which is injected into the HeroesComponent.*/
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
/*In the HTTP tutorial, you'll call
HttpClient.get<Hero[]>() which also returns an
Observable<Hero[]> that emits a single value, an array
 of heroes from the body of the HTTP response.*/
