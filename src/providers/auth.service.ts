import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
    private currentUser: firebase.User;
    constructor(public afAuth: AngularFireAuth) {
        afAuth.authState.subscribe((user: firebase.User) => this.currentUser = user);
    }

    get authenticated(): boolean {
        return this.currentUser !== null;
    }

    public signInWithGoogle(): firebase.Promise<any> {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

        public displayName(): string {
        if (this.currentUser !== null) {
            return this.currentUser.displayName;
       } else {
            return '';
    }
    }


}