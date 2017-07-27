import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {UserDetailPage} from "../user-detail/user-detail";
import {AngularFireAuth} from "angularfire2/auth";
import {FriendsListPage} from "../friends-list/friends-list";

/**
 * Generated class for the FindFriendsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-find-friends',
  templateUrl: 'find-friends.html',
})
export class FindFriendsPage {

  friendsList: FirebaseListObservable<any>;
  friendAdded: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private db: AngularFireDatabase,
              private afAuth: AngularFireAuth
              ) {
  }

  addFriend(friendID, name){
    let id = this.afAuth.auth.currentUser.uid;
    let friendList = this.db.list("userdetail/" + id + "/friends");
    friendList.push({
      id: friendID,
      displayName: name
    });
    this.friendAdded = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindFriendsPage');
    this.friendsList = this.db.list("userdetail/")
  }

  itemSelected(event, uid){
    this.navCtrl.push(FriendsListPage, uid);
  }
}
