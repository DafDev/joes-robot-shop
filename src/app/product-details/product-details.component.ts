import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter();

  getDiscountedPrices(product: IProduct){
    return product.discount > 0 ? ['strikethrough'] : [];
  }
  buyButtonClicked() {
    this.buy.emit();
  }
  
}
