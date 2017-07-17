import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{User} from '../../models/user';
import{RegisterPage}from '../register/register';
import{AngularFireAuth} from 'angularfire2/auth';
import {UserHomePage} from "../user-home/user-home";
import {GooglePlus} from '@ionic-native/google-plus';
import * as firebase from 'firebase';
import { AuthService } from "../../providers/auth.service";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',

})
export class LoginPage {
  AngularFireAuth=firebase.auth
  user = {} as User;
  constructor(private afAuth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,public googlePlus:GooglePlus,
  private _auth: AuthService) {
  }
  async login(user:User) {
    try {
      //const result=this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      this.navCtrl.push(UserHomePage)
    }
    catch(e) {
      console.error(e)
    }
  }
  register(){
    this.navCtrl.push(RegisterPage);
  }

  itemSelected($event, data){
    this.navCtrl.push(UserHomePage);
  }

    public signInWithGoogle(): void {
        this._auth.signInWithGoogle().then(() => this.onSignInSuccess());
    }
     private onSignInSuccess(): void {
        console.log("Google display name ", this._auth.displayName());
        this.navCtrl.push(UserHomePage);

    }

}
