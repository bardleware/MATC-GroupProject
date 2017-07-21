import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{User} from '../../models/user';
import{RegisterPage}from '../register/register';
import{AngularFireAuth} from 'angularfire2/auth';
import {UserHomePage} from "../user-home/user-home";
import {GooglePlus} from '@ionic-native/google-plus';
import * as firebase from 'firebase';
import { AuthService } from "../../providers/auth.service";
import { ToastController } from 'ionic-angular';
import {UserService} from "../../assets/services/user.service";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',

})
export class LoginPage {
  AngularFireAuth=firebase.auth;
  user = {
    email: "test@test.net",
    password: "testtest"
  } as User;
  uID: any;

  constructor(private afAuth:AngularFireAuth,
              public navCtrl: NavController,
              public navParams: NavParams,
              public googlePlus:GooglePlus,
              public userServive: UserService,
              private _auth: AuthService,
              private toastCtrl: ToastController) {}

  ionViewDidLoad(){
    let users = this.userServive.getNames();
    console.log(users);
    // this.login(this.user);
  }

  async login(user:User) {

    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if(result) {
        this.navCtrl.push(UserHomePage);
      }
      else{

        window.alert('Go to register');
      }

      }
    catch(e) {
     window.alert();
      this.presentToast();
      console.error(e.getErrorCode+'Refresh page')
    }
  }
  register(){
    this.navCtrl.push(RegisterPage);
  }

  //itemSelected($event, data){
    //this.navCtrl.push(UserHomePage);
  //}

    public signInWithGoogle(): void {
        this._auth.signInWithGoogle().then(() => this.onSignInSuccess());
    }
     private onSignInSuccess(): void {
        console.log("Google display name ", this._auth.displayName());
        this.navCtrl.push(UserHomePage);

    }

    presentToast() {
  let toast = this.toastCtrl.create({
    message: 'There is no user record corresponding to this identifier..go to Register',
    duration: 3000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}


}
