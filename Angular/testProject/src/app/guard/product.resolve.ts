import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Product } from '../product/product-detail/product-detail.component'; 
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable() // 必须要有这个修饰器才能把router注入构造函数
export class ProductResolve implements Resolve<Product> {

  constructor(private router: Router) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product>|Promise<Product>|Product {

    let id:number = route.params["id"]; // 接收route（url）传递过来的参数

    if(id == 1) { // 进行判断
      return new Product(1, "iphone7");  // 此处不使用http请求，用新生成的一个对象代替请求成功的http请求
    } else {
      this.router.navigate(['/home']); // 不符合条件则导航到home路由所指向的组件
      return undefined;
    }
  }
}