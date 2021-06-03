import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html'
})

export class ProductCreateComponent implements OnInit {
  constructor(private productsService: ProductsService){ }

  ngOnInit(): void { }

  addNewProduct(form){
    const newProduct = {
      categoryId: form.value.product_category,
      productName: form.value.product_name,
      reviews: form.value.product_category,
      description: form.value.product_description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      productImg: '',
      isAvailable: '',
      color: form.value.product_color,
    };

    this.productsService.createProduct(newProduct).subscribe(data => {});
  }
}
