
import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from "angularfire2/database";
import {User} from "../models/user.interface";
import {AngularFireAuth} from "angularfire2/auth";
import {MiniUser} from "../models/user-mini.interface";

@Injectable()
export class UserService {
  abs: string = "";
  users: FirebaseListObservable<any>;
  names: FirebaseListObservable<any>;

  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) {
    db.app.auth().signInWithEmailAndPassword("cole2bass@gmail.com", "C0!eP!@y95");
    this.names = db.list("https://matc-ionic-movies.firebaseio.com/names");
    this.users = db.list("https://matc-ionic-movies.firebaseio.com/users/");
  }

  addName(newName: string) {
    this.names.push({name: newName});
  }

  addNewUser(user: User) {
    this.auth.auth.createUserWithEmailAndPassword(user.email, user.password);
    this.users.push(user);
  }

  addFriend(id, user: MiniUser) {
    let list;
    this.users.subscribe(data =>{
      list = data
      let user;
      for (let i = 0; i < list.length; i++) {
        if (list[i].userId == id) {
          user = list[i];
          user.friends.push(user);
        }
      }
      this.users.update(user);

    });
  }

  getUser(id/*: string | number*/) {
    let user;
    this.users.subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].userId == id) {
          user = data[i];
          break;
        }
      }
      return user;
    });
 }

  getUsers() {
    return this.users;
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
