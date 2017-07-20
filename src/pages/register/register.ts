import{Component} from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import{User} from '../../models/user';
import {AngularFireAuth} from "angularfire2/auth/auth";
import { ToastController } from 'ionic-angular';
import{LoginPage} from '../login/login';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {



  user = {} as User;
  constructor(private afAuth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController) {
  }
  async register(user:User){
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      this.presentToast1();
      //alert('Registration has been completed successfully');
      console.log(result)

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
    message:'The Email address is already in use',
    duration: 3000,
    position: 'top'
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
