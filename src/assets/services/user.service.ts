
import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from "angularfire2/database";

@Injectable()
export class UserService {
  abs: string = "";
  users: FirebaseObjectObservable<any>;
  names: FirebaseListObservable<any>;

  constructor(db: AngularFireDatabase) {
    this.names = db.list("https://matc-ionic-movies.firebaseio.com/names");
    // let admin = require("firebase-admin")

  }

  addName(newName: string) {
    this.names.push({name: newName});
  }

  getNames() {
    return this.names;
  }

}
