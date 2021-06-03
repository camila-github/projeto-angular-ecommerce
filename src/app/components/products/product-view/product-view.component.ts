import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/interfaces/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html'
})

export class ProductViewComponent implements OnInit {
  productId = 0;
  productDetails: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;
    });
    this.productsService.viewProduct(this.productId).subscribe(productData => {
      this.productDetails = productData;
    });
  }
}
