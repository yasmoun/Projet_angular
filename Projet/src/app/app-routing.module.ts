import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { HomeComponent } from './home/home.component';
import { EvennementFormComponent } from './evennement-form/evennement-form.component';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EventDetailsComponent } from './event-details/event-details.component';

const routes: Routes = [
  { path: 'authentification', component: AuthentificationComponent },
  {path: 'home' , component: HomeComponent},
  {path:'event-form' , component:EvennementFormComponent},
  {path:'front-office' , component:FrontOfficeComponent},
  {path:'aboutus' , component:AboutusComponent},
  {path:'event-details/:id' , component: EventDetailsComponent},
   {path:'**' ,  component: AuthentificationComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
