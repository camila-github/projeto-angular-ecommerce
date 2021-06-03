import { Component, OnInit } from '@angular/core';

import { Category } from '../../../interfaces/category';
import { ProductsService } from '../../../components/products/products.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  categoryList: Category;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getCategories().subscribe(data => {
      this.categoryList = data;
    });
  }

}
