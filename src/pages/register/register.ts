import{Component} from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import{User} from '../../models/user';
import {AngularFireAuth} from "angularfire2/auth/auth";
import { ToastController } from 'ionic-angular';
import{LoginPage} from '../login/login';
import {UserService} from "../../assets/services/user.service";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  showLoginButton: boolean = false;
  user: User;
  displayName: string;

  constructor(private afAuth:AngularFireAuth,
              public navCtrl: NavController,
              public navParams: NavParams,
              private toastCtrl: ToastController,
              private userService: UserService,
              ) {}

  async register(user: User){
    try {
      if (this.displayName){
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
        this.userService.updateProfile(this.displayName);
        this.presentToast1();
        this.showLoginButton = true;
      } else {
        this.presentToast3();
      }

    }
    catch(e) {

      this.presentToast2();
      console.error(e)
    }
  }

  presentToast1() {
  let toast = this.toastCtrl.create({
    message:'Registration has been completed successfully',
    duration: 3000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}
presentToast2() {
  let toast = this.toastCtrl.create({
    message:'Email in use OR password too short',
    duration: 3000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}
  presentToast3() {
    let toast = this.toastCtrl.create({
      message:'Please enter a User Name',
      duration: 2000,
      position: 'center'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

}
