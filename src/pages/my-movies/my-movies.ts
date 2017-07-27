import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";
import {MovieDetailPage} from "../movie-detail/movie-detail";

/**
 * Generated class for the MyMoviesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-movies',
  templateUrl: 'my-movies.html',
})
export class MyMoviesPage {

  movieList: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private db: AngularFireDatabase,
              private afAuth: AngularFireAuth

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyMoviesPage');
    this.fetchMovieList();
  }

  itemSelected(event, movieID){
    this.navCtrl.push(MovieDetailPage, movieID);
  }

  fetchMovieList(){
    let id = this.afAuth.auth.currentUser.uid;
    this.movieList = this.db.list("userdetail/" + id + "/movies")
  }

}
