
import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from "angularfire2/database";
import {User} from "../models/user.interface";
import {AngularFireAuth} from "angularfire2/auth";
import {User} from "../models/user.interface";
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class UserService {
  abs: string = "";
  users: FirebaseListObservable<any>;
  names: FirebaseListObservable<any>;

  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) {
    db.app.auth().signInWithEmailAndPassword("cole2bass@gmail.com", "C0!eP!@y95");
    this.names = db.list("https://matc-ionic-movies.firebaseio.com/names");
    this.users = db.list("https://matc-ionic-movies.firebaseio.com/users/users");
  }

  addName(newName: string) {
    this.names.push({name: newName});
  }

  addNewUser(user: User) {
    this.auth.auth.createUserWithEmailAndPassword(user.email, user.password);
    this.users.push(user);
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
