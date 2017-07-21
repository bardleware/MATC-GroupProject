var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieService } from "../../assets/services/movie.service";
/**
 * Generated class for the MovieDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
let MovieDetailPage = class MovieDetailPage {
    constructor(navCtrl, navParams, movieService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.movieService = movieService;
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
    gotoWebsite() {
        window.open(this.movie.homepage, "_blank");
        console.log(this.movie.homepage);
    }
    gotoIMDB() {
        let url = "http://www.imdb.com/title/" + this.movie.imdb_id;
        window.open(url, "_blank");
        console.log(url);
    }
};
MovieDetailPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-movie-detail',
        templateUrl: 'movie-detail.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        MovieService])
], MovieDetailPage);
export { MovieDetailPage };
//# sourceMappingURL=movie-detail.js.map