import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelComponent } from './travel/travel.component';
import { AppComponent } from './app.component';
import { PostComponent } from './travel/post/post.component';

const routes: Routes = [
	{ path: 'travel', component: TravelComponent },
	{ path: 'app', component: AppComponent },
	{ path: 'post/:id', component: PostComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
