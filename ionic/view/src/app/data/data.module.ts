import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DataPage } from './data.page';
import { TestComponent } from '../comment/component/test/test.component'

const routes: Routes = [
  {
    path: '',
    component: DataPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DataPage, TestComponent]
})
export class DataPageModule {}
