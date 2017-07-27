
import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";
import {MiniUser} from "../models/user-mini.interface";
import {UserProfile} from "../models/user.class";
import {User} from "firebase/app";
import {MiniMovie} from "../models/movie-mini.interface";

@Injectable()
export class UserService {
  abs: string = "";
  users: FirebaseListObservable<any>;
  names: FirebaseListObservable<any>;
  // userDetails: FirebaseObjectObservableObservable;

  constructor(private db: AngularFireDatabase,
              private auth: AngularFireAuth) {
    // db.app.auth().signInWithEmailAndPassword("cole2bass@gmail.com", "C0!eP!@y95");
    this.names = db.list("https://matc-ionic-movies.firebaseio.com/names");
    this.users = db.list("https://matc-ionic-movies.firebaseio.com/users");

  }

  addName(newName: string) {
    this.names.push({name: newName});
  }

  addNewUser(user: User) {
    // this.auth.auth.createUserWithEmailAndPassword(user.email, user.password);
    this.users.push(user); // add user users list
  }

  addNewUserDetails(uid, name){
    this.db.object("userdetail/" + uid ).
    set({
          displayName: name,
          id: uid
        });
  }

  addFriend(id, user: MiniUser) {

  }

  getUser(id/*: string | number*/) {
    return this.db.list("https://matc-ionic-movies.firebaseio.com/users/users/"+id);
  }

  updateProfile(displayName: string, photoURL?: string){
    if (!photoURL) {photoURL = ""}

    this.auth.auth.currentUser.updateProfile(({
      displayName: displayName,
      photoURL: photoURL
    }))
  }

  getCurrentUser(){
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

}
