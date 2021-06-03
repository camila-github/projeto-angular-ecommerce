import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ProductsComponent } from './products.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsViewAllComponent } from './products-view-all/products-view-all.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductsViewAllByCategoryComponent } from './products-view-all-by-category/products-view-all-by-category.component';
import { ProductsRoutingModule } from './products.routing.module';
import { ProductsService } from './products.service';
import { RouterModule } from '@angular/router';
import { StarModule } from 'src/app/shared/star/star.module';


@NgModule({
  declarations:
    [
      ProductsComponent,
      ProductCreateComponent,
      ProductViewComponent,
      ProductsViewAllComponent,
      ProductUpdateComponent,
      ProductDeleteComponent,
      ProductsViewAllByCategoryComponent
    ],
  imports:
    [
      CommonModule,
      FormsModule,
      RouterModule,
      StarModule,
      ProductsRoutingModule

    ],
    providers: [
      ProductsService
    ]
})
export class ProductsModule { }
