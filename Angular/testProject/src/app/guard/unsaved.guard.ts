import { CanDeactivate } from '@angular/router';
import { ProductComponent } from '../product/product.component';

export class UnsavedGuard implements CanDeactivate<ProductComponent> {  // 守卫的是ProductComponent组件，所以泛型用的是ProductComponent
  canDeactivate (component: ProductComponent) {  // 写判断是否要离开的逻辑，返回true则离开，false则不离开
    
    return window.confirm("Are you sure?")
  }
}