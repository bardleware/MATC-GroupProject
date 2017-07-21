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
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth/auth";
import { ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
let RegisterPage = class RegisterPage {
    constructor(afAuth, navCtrl, navParams, toastCtrl) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.showLoginButton = false;
        this.user = {};
    }
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
                this.presentToast1();
                this.showLoginButton = true;
                //alert('Registration has been completed successfully');
                console.log(result);
            }
            catch (e) {
                this.presentToast2();
                console.error(e);
            }
        });
    }
    presentToast1() {
        let toast = this.toastCtrl.create({
            message: 'Registration has been completed successfully',
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
            message: 'Email already in use OR password too short',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });
        toast.present();
    }
    goToLogin() {
        this.navCtrl.push(LoginPage);
    }
};
RegisterPage = __decorate([
    Component({
        selector: 'page-register',
        templateUrl: 'register.html'
    }),
    __metadata("design:paramtypes", [AngularFireAuth,
        NavController,
        NavParams,
        ToastController])
], RegisterPage);
export { RegisterPage };
//# sourceMappingURL=register.js.map