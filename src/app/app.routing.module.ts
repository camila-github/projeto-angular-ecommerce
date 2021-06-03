import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './core/pages/about/about.component';

import { ContactComponent } from './core/pages/contact/contact.component';
import { HomeComponent } from './core/pages/home/home.component';


const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'products',
    loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule)
  }
];

@NgModule({
  imports:
    [
      RouterModule.forRoot(ROUTES, { relativeLinkResolution: 'legacy' }),
    ],
  exports:
    [
      RouterModule
    ]
})

export class AppRoutingModule { }

