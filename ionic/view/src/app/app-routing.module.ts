import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'mission', loadChildren: './mission/mission.module#MissionPageModule' },
  { path: 'scene', loadChildren: './scene/scene.module#ScenePageModule' },
  { path: 'data', loadChildren: './data/data.module#DataPageModule' },
  { path: 'system', loadChildren: './system/system.module#SystemPageModule' },
  { path: 'apply', loadChildren: './apply/apply.module#ApplyPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
