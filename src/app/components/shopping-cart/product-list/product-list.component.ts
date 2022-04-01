
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = []//property

  //Dependency injection
  constructor(private productService: ProductService) { }

  ngOnInit(): void { //live cycle hook
    //this method will fired after fully loading comp, html,etc
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    })
  }

}
