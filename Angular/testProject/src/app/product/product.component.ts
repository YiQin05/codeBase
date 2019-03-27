import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  
  private productId:number;
  constructor(private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    this.routerInfo.params.subscribe((params: Params) => this.productId = params["id"])
  }

}

