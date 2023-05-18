import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
// import { MenupageComponent } from './component/pages/menupage/menupage.component';
import { HomeComponent } from './component/pages/home/home.component';
import { AboutComponent } from './component/pages/about/about.component';
import { ContactComponent } from './component/pages/contact/contact.component';
import { MenuComponent } from './component/pages/menu/menu.component';
import { MenupageComponent } from './component/pages/menupage/menupage.component';

const routes: Routes = [

  {
    path: '', component: DashboardComponent,
    children: [
      {path:'', redirectTo : '/homepage/home' , pathMatch : 'full' },
      { path: 'navbar', component: NavbarComponent }, 
      { path: 'footer', component: FooterComponent },
      // { path: 'menu/:id', component: MenuComponent },
      { path: 'menu', component: MenuComponent},
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'home', component: HomeComponent },
      { path: 'menupage/:id', component: MenupageComponent }

    ],
    
  },
  // { path: 'menus', component: MenupageComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
