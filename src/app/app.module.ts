import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TravelComponent } from './travel/travel.component';
import { AboutComponent } from './about/about.component';
import { MonthComponent } from './travel/month/month.component';
import { PostComponent } from './travel/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TravelComponent,
    AboutComponent,
    MonthComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
