import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoviesSearchPage } from './movies-search';

@NgModule({
  declarations: [
    MoviesSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(MoviesSearchPage),
  ],
  exports: [
    MoviesSearchPage
  ]
})
export class MoviesSearchPageModule {}
