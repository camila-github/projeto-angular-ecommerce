import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsViewAllComponent } from './products-view-all/products-view-all.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductsViewAllByCategoryComponent } from './products-view-all-by-category/products-view-all-by-category.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductUpdateComponent } from './product-update/product-update.component';


const ROUTES: Routes = [
  { path: '', component: ProductsViewAllComponent },
  { path: 'product-create', component: ProductCreateComponent },
  { path: 'category/:id', component: ProductsViewAllByCategoryComponent},
  { path: 'product-delete/:id', component: ProductDeleteComponent },
  { path: 'product/:id', component: ProductViewComponent },
  { path: 'product-update/:id', component: ProductUpdateComponent  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(ROUTES)
    ],
  exports:
    [
      RouterModule
    ]
})

export class ProductsRoutingModule { }
