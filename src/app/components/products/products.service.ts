import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { Category } from 'src/app/interfaces/category';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private baseUrl = 'http://localhost:3000/products/';

  constructor(private http: HttpClient) {}

  // Get all products
  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }

 // creating the products
  createProduct(productBody): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, productBody);
  }

 // Viewing the products
  viewProduct(productId): Observable<Product>{
    //const url = `${this.baseUrl}/${productId}`;
    return this.http.get<Product>(this.baseUrl + productId);
  }

  // Update the product
  updateProduct(productId, productBody): Observable<Product>{
    //const url = `${this.baseUrl}/${productId}`;
    return this.http.put<Product>(this.baseUrl + productId, productBody);
  }

  // Delete the Products
  deleteProduct(productId): Observable<void>{
    //const url = `${this.baseUrl}/${productId}`;
    return this.http.delete<void>(this.baseUrl + productId);
  }

   // @Search By category
  searchCategoryProduct(categoryId): Observable<Product>{
    const url = 'http://localhost:3000/products?categoryId=' + categoryId;
    return this.http.get<Product>(url);
  }

   // changing of sidebar
  getCategories(): Observable<Category>{
    const url = 'http://localhost:3000/categories';
    return this.http.get<Category>(url);
  }

}

