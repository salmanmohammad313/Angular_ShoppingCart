import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Product } from 'src/app/models/product';

const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //this our product service method
  // products: Product[] = [
  //   new Product(1, 'Product1', 'this is a good product', 100),
  //   new Product(2, 'Product2', 'this is a good product', 120),
  //   new Product(3, 'Product3', 'this is a good product', 130),
  //   new Product(4, 'Product4', 'this is a good product', 140),
  //   new Product(5, 'Product5', 'this is a good product', 150),
  //   new Product(6, 'Product6', 'this is a good product', 160),
  //   new Product(7, 'Product7', 'this is a good product', 170),
  //   new Product(8, 'Product8', 'this is a good product', 180),
  // ]

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]> {//observable eventually return product array
    return this.http.get<Product[]>(apiUrl)  //it will return observable
  }
}
