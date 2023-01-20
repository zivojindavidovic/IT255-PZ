import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home/:id', component: AnimalDetailsComponent },
  { path: 'add', component: AddAnimalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
