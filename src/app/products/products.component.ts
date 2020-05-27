import { Component, OnInit } from '@angular/core';
import { Product } from "../_models/product";

const PRODUCTS: Product[] = [
  {
    name: "Product0",
    description: "Descriprion0"
  },
  {
    name: "Product1",
    description: "Descriprion1"
  },
  {
    name: "Product2",
    description: "Descriprion2"
  }
]

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  products = PRODUCTS;

  ngOnInit(): void {
  }

}
