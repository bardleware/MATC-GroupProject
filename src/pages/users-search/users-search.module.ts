import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersSearchPage } from './users-search';

@NgModule({
  declarations: [
    UsersSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersSearchPage),
  ],
  exports: [
    UsersSearchPage
  ]
})
export class UsersSearchPageModule {}
