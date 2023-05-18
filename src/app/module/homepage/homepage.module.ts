import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/pages/home/home.component';
import { AboutComponent } from './component/pages/about/about.component';
import { MenuComponent } from './component/pages/menu/menu.component';
import { ContactComponent } from './component/pages/contact/contact.component';
import { MenupageComponent } from './component/pages/menupage/menupage.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    ContactComponent,
    MenupageComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
