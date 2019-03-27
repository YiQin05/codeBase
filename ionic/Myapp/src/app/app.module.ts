// ionic核心文件
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

// 打包成app以后的配置启动画面及导航条服务
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// 路由配置文件
import { AppRoutingModule } from './app-routing.module';

// 引入跟组件
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], // 声明组件
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],  // 引入的依赖模块
  providers: [ // 配置服务
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
