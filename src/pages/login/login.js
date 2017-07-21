var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserHomePage } from "../user-home/user-home";
import { GooglePlus } from '@ionic-native/google-plus';
import * as firebase from 'firebase';
import { AuthService } from "../../providers/auth.service";
import { ToastController } from 'ionic-angular';
import { UserService } from "../../assets/services/user.service";
let LoginPage = class LoginPage {
    constructor(afAuth, navCtrl, navParams, googlePlus, userServive, _auth, toastCtrl) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googlePlus = googlePlus;
        this.userServive = userServive;
        this._auth = _auth;
        this.toastCtrl = toastCtrl;
        this.AngularFireAuth = firebase.auth;
        this.user = {
            email: "test@test.net",
            password: "testtest"
        };
    }
    ionViewDidLoad() {
        let users = this.userServive.getNames();
        console.log(users);
        // this.login(this.user);
    }
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
                if (result) {
                    this.navCtrl.push(UserHomePage);
                }
                else {
                    window.alert('Go to register');
                }
            }
            catch (e) {
                window.alert();
                this.presentToast();
                console.error(e.getErrorCode + 'Refresh page');
            }
        });
    }
    register() {
        this.navCtrl.push(RegisterPage);
    }
    //itemSelected($event, data){
    //this.navCtrl.push(UserHomePage);
    //}
    signInWithGoogle() {
        this._auth.signInWithGoogle().then(() => this.onSignInSuccess());
    }
    onSignInSuccess() {
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
};
LoginPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-login',
        templateUrl: 'login.html',
    }),
    __metadata("design:paramtypes", [AngularFireAuth,
        NavController,
        NavParams,
        GooglePlus,
        UserService,
        AuthService,
        ToastController])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.js.map