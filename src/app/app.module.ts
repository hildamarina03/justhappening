import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

import { RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes=[
  {path: 'list/:id', component:ListComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'list', component:ListComponent},
  {path: 'home', component:HomeComponent},
  {path: '', redirectTo:'about', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    AboutComponent,
    ContactComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }