var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
let UserService = class UserService {
    // userDetails: FirebaseObjectObservableObservable;
    constructor(db, auth) {
        this.db = db;
        this.auth = auth;
        this.abs = "";
        // db.app.auth().signInWithEmailAndPassword("cole2bass@gmail.com", "C0!eP!@y95");
        this.names = db.list("https://matc-ionic-movies.firebaseio.com/names");
        this.users = db.list("https://matc-ionic-movies.firebaseio.com/users");
    }
    addName(newName) {
        this.names.push({ name: newName });
    }
    addNewUser(user) {
        // this.auth.auth.createUserWithEmailAndPassword(user.email, user.password);
        this.users.push(user); // add user users list
    }
    addNewUserDetails(uid, name) {
        this.db.object("https://matc-ionic-movies.firebaseio.com/userdetail/" + uid).
            set({
            dispayName: name,
            favoriteMovies: [76341, 9659],
            friends: [1234, 5678]
        });
    }
    addFriend(id, user) {
    }
    getUser(id /*: string | number*/) {
        return this.db.list("https://matc-ionic-movies.firebaseio.com/users/users/" + id);
    }
    updateProfile(displayName, photoURL) {
        if (!photoURL) {
            photoURL = "";
        }
        this.auth.auth.currentUser.updateProfile(({
            displayName: displayName,
            photoURL: photoURL
        }));
    }
    getCurrentUser() {
        return this.auth.auth.currentUser;
    }
    getNames() {
        return this.names;
    }
    getDetails() {
        let user = this.auth.auth.currentUser;
        return {
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
            emailVerified: user.emailVerified,
            uid: user.uid
        };
    }
    login(email, password) {
        this.auth.auth.signInWithEmailAndPassword(email, password);
    }
};
UserService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AngularFireDatabase,
        AngularFireAuth])
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map