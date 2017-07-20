import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SearchPage} from "../search/search";
import {User} from "firebase/app";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireModule} from "angularfire2";
import {UserService} from "../../assets/services/user.service";

/**
 * Generated class for the UserHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-home',
  templateUrl: 'user-home.html',
})
export class UserHomePage {
  user: User;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public afAuth: AngularFireAuth,
              public userService: UserService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserHomePage');

    this.user = this.userService.getCurrentUser();
    console.log(this.user.displayName);

  }



  itemSelected(){
    this.navCtrl.push(SearchPage);
  }


}
