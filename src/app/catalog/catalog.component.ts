import { Component, inject } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products!: IProduct[];
  filter: string = '';
  // private cartService: CartService = inject(CartService); //other way to inject services

  constructor(private cartService: CartService, private productService: ProductService){

    this
  }

  ngOnInit(){
    this.productService.getProducts().subscribe(products => {
      this.products = products
    });
  }

  getFilteredProducts(): IProduct[]{
    return this.filter === ''
    ? this.products
    : this.products.filter((product) => product?.category === this.filter); 
  }

  addToCart(product: IProduct){ 
    this.cartService.add(product);
  }
}
