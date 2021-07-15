import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserregComponent } from './components/userreg/userreg.component';
const routes: Routes = [

{
  path:'',
  component:HomeComponent,
  pathMatch:'full'
},

{
  path:'login',
  component:LoginComponent,
  pathMatch:'full'
},
{
  path:'userreg',
  component:UserregComponent,
  pathMatch:'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
