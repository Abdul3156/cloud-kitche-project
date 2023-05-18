import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './authenticator/log-in/log-in.component';
import { SignUpComponent } from './authenticator/sign-up/sign-up.component';

const routes: Routes = [
  {path:'', redirectTo : '/login' , pathMatch : 'full' },
  {path:'login',component:LogInComponent},
  {path:'signup',component:SignUpComponent}, 
 
  {
    path: 'homepage',
    loadChildren: () => import('./module/homepage/homepage.module').then(m => m.HomepageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
