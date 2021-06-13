import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../../interfaces/product';
import { ProductsService } from '../products.service';
import { Category } from '../../../interfaces/category';
@Component({
  selector: 'app-products-view-all-by-category',
  templateUrl: './products-view-all-by-category.component.html'
})

export class ProductsViewAllByCategoryComponent implements OnInit {
  categoryList: Category;
  productList: Product;

  constructor(
    private activatedRoute : ActivatedRoute,
    private productsService : ProductsService) { }

  ngOnInit(): void {
    this.searchCategoryList();
  }

  searchCategoryList() {
      this.activatedRoute.params.subscribe(data =>{
        this.categoryList = data.id;
      });
      this.productsService.searchCategoryProduct(this.categoryList).subscribe(categorydata =>{
          this.productList = categorydata;
      });
    }
  }


