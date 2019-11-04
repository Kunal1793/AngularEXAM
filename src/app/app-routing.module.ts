import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PatientsComponent } from './patients/patients.component';


const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Patients', component: PatientsComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
