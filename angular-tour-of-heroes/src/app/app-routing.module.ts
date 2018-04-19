import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
];

/*The method is called forRoot() because you configure
the router at the application's root level*/
@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes) //forRoot() method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.
  ],

})


export class AppRoutingModule {

}
