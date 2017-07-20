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
import { SearchPage } from "../search/search";
import { AngularFireAuth } from "angularfire2/auth";
/**
 * Generated class for the UserHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
let UserHomePage = class UserHomePage {
    constructor(navCtrl, navParams, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.hasDisplayName = false;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad UserHomePage');
        this.user = this.afAuth.auth.currentUser;
        console.log(this.user.);
        if (this.user) {
            this.afAuth.auth.currentUser.updateProfile({ displayName: "Test" });
        }
    }
    itemSelected() {
        this.navCtrl.push(SearchPage);
    }
};
UserHomePage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-user-home',
        templateUrl: 'user-home.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        AngularFireAuth])
], UserHomePage);
export { UserHomePage };
//# sourceMappingURL=user-home.js.map