import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { TravelComponent } from '../travel/travel.component';

const routes: Routes = [
	{ path: 'app', component: AppComponent },
	{ path: '/travel', component: TravelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
