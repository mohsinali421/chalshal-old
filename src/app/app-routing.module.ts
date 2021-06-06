import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HowtoreachComponent } from './howtoreach/howtoreach.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TourpackageComponent } from './tourpackage/tourpackage.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'howtoreach', component: HowtoreachComponent },
  { path: 'tourpackage', component: TourpackageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
