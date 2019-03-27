import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: '首页',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: '任务管理',
      url: '/mission',
      icon: 'list'
    },
    {
      title: '场景识别',
      url: '/scene',
      icon: 'list'
    },
    {
      title: '数据管理',
      url: '/data',
      icon: 'list'
    },
    {
      title: '系统管理',
      url: '/system',
      icon: 'list'
    },
    {
      title: '应用案例',
      url: '/apply',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
