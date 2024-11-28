import { Component, Input } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
  @Input() product!: IProduct;

  getImageUrl(product: IProduct): string{
    return '/assets/images/robot-parts/' + product?.imageName;
  }
}
