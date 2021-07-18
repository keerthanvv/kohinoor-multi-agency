import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserregComponent } from './components/userreg/userreg.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuardGuard } from './auth-guard.guard';
const routes: Routes = [

{path:'', component:HomeComponent,pathMatch:'full'},
{path:'login',component:LoginComponent,pathMatch:'full'},
{path:'userreg',component:UserregComponent,pathMatch:'full'},
{path:'dashboard',component:DashboardComponent,pathMatch:'full',canActivate:[AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
