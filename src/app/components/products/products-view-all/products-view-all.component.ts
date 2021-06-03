import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/interfaces/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-view-all',
  templateUrl: './products-view-all.component.html'
})

export class ProductsViewAllComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data =>{
      this.productList = data;
    })
  }
}
