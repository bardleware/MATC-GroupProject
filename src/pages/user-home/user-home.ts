import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SearchPage} from "../search/search";
import {User} from "firebase/app";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireModule} from "angularfire2";
import {UserService} from "../../assets/services/user.service";
import {AngularFireDatabase} from "angularfire2/database";
import {MyMoviesPage} from "../my-movies/my-movies";
import {FindFriendsPage} from "../find-friends/find-friends";

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
  uID: any;
  displayName: any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public afAuth: AngularFireAuth,
              public userService: UserService,
              private db: AngularFireDatabase,

  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserHomePage');
    this.displayName = this.afAuth.auth.currentUser.displayName;
  }

  favoriteMovies(){
    this.navCtrl.push(MyMoviesPage);
  }

  findFriends(){
    this.navCtrl.push(FindFriendsPage);
  }

  itemSelected(){
    this.navCtrl.push(SearchPage);
  }


}
