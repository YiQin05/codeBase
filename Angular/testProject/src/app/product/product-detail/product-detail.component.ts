import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less']
})
export class ProductDetailComponent implements OnInit {

  private productId: number;
  private productName: string;

  constructor(private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    this.routerInfo.data.subscribe((data: {product: Product}) => {
      this.productId = data.product.id;
      this.productName = data.product.name;
    })
  }

}

export class Product {
  constructor(public id:number, public name:string) {
  }
}