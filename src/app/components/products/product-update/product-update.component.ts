import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/interfaces/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html'
})

export class ProductUpdateComponent implements OnInit {
  productId = 0;
  productDetails: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;

      // get the existing data of the product
      this.productsService.viewProduct(this.productId).subscribe(productData => {
        this.productDetails = productData;
      });
    });
  }

  updateProduct(form){
    const updateProduct = {
      id: form.value.id,
      categoryId: form.value.categoryId,
      productName: form.value.productName,
      description: form.value.description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      color: form.value.product_color,
      reviews: form.value.product_category,
      releaseDate: form.value.product_releaseDate
    };

    this.productsService.updateProduct(this.productId, updateProduct).subscribe(data => { });
  }
}
