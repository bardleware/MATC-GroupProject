import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyMoviesPage } from './my-movies';

@NgModule({
  declarations: [
    MyMoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyMoviesPage),
  ],
  exports: [
    MyMoviesPage
  ]
})
export class MyMoviesPageModule {}
