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
  public backdropURL: string;
  public movie: any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public movieService: MovieService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailPage');
    this.movieService.getMovie(this.navParams.data)
      .subscribe(data => {
        this.movie = data;
        this.posterURL = this.movieService.getPosterUrl(this.movie.poster_path);
        this.backdropURL = this.movieService.getPosterUrl(this.movie.backdrop_path);
        console.log(this.posterURL);
        console.log(this.backdropURL);
      });

  }
  gotoWebsite(){
    window.open(this.movie.homepage,"_blank");
    console.log(this.movie.homepage);
  }

  gotoIMDB(){
    let url: string = "http://www.imdb.com/title/" + this.movie.imdb_id;
    window.open(url,"_blank");
    console.log(url);
  }

}
