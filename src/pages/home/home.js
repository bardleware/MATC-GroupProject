var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { UserService } from "../../assets/services/user.service";
import { RegisterPage } from "../register/register";
/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
let HomePage = class HomePage {
    constructor(navCtrl, navParams, userServ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userServ = userServ;
        window.localStorage.removeItem('currentuser');
        if (!this.isLoggedin()) {
            console.log('You are not logged in');
            // this.navCtrl.push(LoginPage);
        }
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
        let names = this.userServ.getNames().subscribe(data => console.log(data));
        console.log(names);
        // this.userServ.addName("Bruce Wayne");
    }
    itemSelected($event, data) {
        this.navCtrl.push(LoginPage);
    }
    registerSelected($event, data) {
        this.navCtrl.push(RegisterPage);
    }
    isLoggedin() {
        if (window.localStorage.getItem('currentuser')) {
            return true;
        }
    }
};
HomePage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-home',
        templateUrl: 'home.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, UserService])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map