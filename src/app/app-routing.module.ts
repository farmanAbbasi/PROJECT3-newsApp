import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "landing",
    component: LandingComponent
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
