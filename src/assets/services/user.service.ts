
import {Injectable, OnInit} from "@angular/core";
import {AngularFireDatabase, FirebaseObjectObservable} from "angularfire2/database";

@Injectable()
export class UserService {
  abs: string = "";
  users: FirebaseObjectObservable<any>;
  names: FirebaseObjectObservable<any>;

  constructor(db: AngularFireDatabase) {
    this.names = db.object("https://matc-ionic-movies.firebaseio.com/names");
    this.names.set({name: "Sarah Walker"})
  }



}
