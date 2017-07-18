import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MovieDetailPage} from "../movie-detail/movie-detail";
import {UserDetailPage} from "../user-detail/user-detail";
import {MovieService} from "../../assets/services/movie.service";

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  myInput: string;
  movieList: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public movieSearch: MovieService
              ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');

  }

  searchForMovie(input: string){
    this.movieSearch.searchMovies(input).subscribe(response => {
      this.movieList = response;
      console.log(this.movieList);
    });

  }

  searchMovies(title: string){
  }

  myMovieSelected($event, data){
    this.navCtrl.push(MovieDetailPage);
  }

  userSelected($event, data){
    this.navCtrl.push(UserDetailPage);
  }

  movieSelected($event, data){
    this.navCtrl.push(MovieDetailPage);
  }

}
