import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: ' ', component: HomeComponent },
  { path: 'profile ', component: ProfileComponent },
  { path: '** ', component: NotFoundComponent }

];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
    // AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
