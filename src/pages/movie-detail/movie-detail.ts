import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MovieService} from "../../assets/services/movie.service";

/**
 * Generated class for the MovieDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  public posterURL: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public movieService: MovieService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailPage');
    this.movieService.getMovie(76341).subscribe(data => console.log(data));
    this.posterURL = this.movieService.getPosterUrl("/kqjL17yufvn9OVLyXYpvtyrFfak.jpg", window.innerWidth);

  }

}
