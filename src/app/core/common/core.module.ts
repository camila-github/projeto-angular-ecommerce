import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from '../pages/home/home.module';
import { ContactModule } from '../pages/contact/contact.module';
import { AboutModule } from '../pages/about/about.module';
@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    ContactModule,
    HomeModule,
    AboutModule
  ],
  exports : [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
