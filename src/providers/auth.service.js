var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
let AuthService = class AuthService {
    constructor(afAuth) {
        this.afAuth = afAuth;
        afAuth.authState.subscribe((user) => this.currentUser = user);
    }
    get authenticated() {
        return this.currentUser !== null;
    }
    signInWithGoogle() {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    displayName() {
        if (this.currentUser !== null) {
            return this.currentUser.displayName;
        }
        else {
            return '';
        }
    }
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AngularFireAuth])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map