import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductSellerComponent } from './product/product-seller/product-seller.component';
import { ChatComponent } from './chat/chat.component';
import { LoginGuard } from './guard/login.guard';
import { UnsavedGuard } from './guard/unsaved.guard';
import { ProductResolve } from './guard/product.resolve';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'chat', component: ChatComponent, outlet: 'aux' }, // 在副插座上显示的组件
  { path: 'product', component: ProductComponent, children: [
    { path: 'productDetail/:id', component: ProductDetailComponent, resolve: {
      product:ProductResolve
    }},
    { path: 'productSeller', component: ProductSellerComponent}
  ], canActivate: [LoginGuard], canDeactivate: [UnsavedGuard]}, // canActivate属性指定的数组中，只要有一个路由守卫返回的是false，则不能跳转
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, UnsavedGuard, ProductResolve]
})
export class AppRoutingModule { }
