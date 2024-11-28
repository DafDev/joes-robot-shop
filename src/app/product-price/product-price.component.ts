import { Component, Input } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent {
  @Input() product!: IProduct;

  getDiscountedPrices(product: IProduct){
    return product.discount > 0 ? ['strikethrough'] : [];
  }
  
}
