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
import { MovieDetailPage } from "../movie-detail/movie-detail";
import { UserDetailPage } from "../user-detail/user-detail";
import { MovieService } from "../../assets/services/movie.service";
/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
let SearchPage = class SearchPage {
    constructor(navCtrl, navParams, movieSearch) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.movieSearch = movieSearch;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad SearchPage');
    }
    searchForMovie(input) {
        this.movieSearch.searchMovies(input).subscribe(response => {
            this.movieList = response.results;
            console.log(this.movieList);
        });
    }
    itemSelected(event, movieID) {
        console.log(movieID);
        this.navCtrl.push(MovieDetailPage, movieID);
    }
    searchMovies(title) {
    }
    myMovieSelected($event, data) {
        this.navCtrl.push(MovieDetailPage);
    }
    userSelected($event, data) {
        this.navCtrl.push(UserDetailPage);
    }
    movieSelected($event, data) {
        this.navCtrl.push(MovieDetailPage);
    }
};
SearchPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-search',
        templateUrl: 'search.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        MovieService])
], SearchPage);
export { SearchPage };
//# sourceMappingURL=search.js.map