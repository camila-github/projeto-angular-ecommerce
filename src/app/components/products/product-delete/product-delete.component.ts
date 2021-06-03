import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html'
})

export class ProductDeleteComponent implements OnInit {
  productId = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;
      this.productsService.deleteProduct(this.productId).subscribe(deleteProductdata => { });
    });
  }
}
