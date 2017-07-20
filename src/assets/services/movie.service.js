var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs";
let MovieService = class MovieService {
    constructor(http) {
        this.http = http;
        //Unique Movie Url has https://api.themoviedb.org/3/movie/{movie_id}?api_key={apiKey}
        this.specificMovieUrl = "https://api.themoviedb.org/3/movie/";
        this.discoveryUrl = "https://api.themoviedb.org/3/discover/movie";
        this.searchUrl = "https://api.themoviedb.org/3/search/movie";
        this.genreListUrl = "https://api.themoviedb.org/3/genre/movie/list";
        this.apiKey = "9d1d4c863da80cfbbfdfc5d7b3c456b0";
        this.baseImageUrl = "https://image.tmdb.org/t/p/";
        this.profileSizes = ["w45", "w185", "h632"];
        this.posterSizes = ["w92", "w154", "w300", "w500"];
    }
    getMovie(movieId) {
        let url = this.specificMovieUrl + movieId + "?api_key=" + this.apiKey + "&language=en-US&include_adult=false";
        console.log(url);
        return this.http.get(url)
            .map((response) => { return response.json(); });
    }
    discoverMovies(list) {
        let url = this.discoveryUrl + "?api_key=" + this.apiKey + "&language=en-US&include_adult=false&include_video=false";
        let buildUrl = url + this.generateUrl(list);
        return this.http.get(buildUrl)
            .map((response) => { return response.json(); });
    }
    searchMovies(query, list) {
        let url = this.searchUrl + "?api_key=" + this.apiKey + "&language=en-US";
        url += "&query=" + query;
        url += "&include_adult=false";
        console.log(url);
        if (list) {
            url += this.buildSearchQuery(list);
        }
        return this.http.get(url)
            .map((response) => { return response.json(); });
    }
    buildSearchQuery(list) {
        let url = "";
        for (let i = 0; i < list.length; i++) {
            if (list[i].key == "page") {
                url += "&page=" + list[i].value;
            }
            if (list[i].key == "year") {
                url += "&year=" + list[i].value;
            }
        }
        return url;
    }
    getMovieCredits(movieId) {
        let url = this.specificMovieUrl + movieId + "/credits" + "?api_key" + this.apiKey;
        return this.http.get(url)
            .map((response) => { return response.json(); });
    }
    getMovieImageDetails(movieId) {
        let url = this.specificMovieUrl + movieId + "/images" + "?api_key" + this.apiKey;
        return this.http.get(url)
            .map((response) => { return response.json(); });
    }
    getVideos(movieId) {
        let url = this.specificMovieUrl + movieId + "/videos" + "?api_key=" + this.apiKey + "&language=en-US";
        return this.http.get(url)
            .map((response) => { return response.json(); });
    }
    getGenreList() {
        let url = this.genreListUrl + "?api_key=" + this.apiKey + "&language=en-US";
        return this.http.get(url)
            .map((response) => { return response.json(); });
    }
    getPosterUrl(imageUrl, width) {
        let size = "";
        if (width) {
            if (width > 500) {
                size = "w500";
            }
        }
        else {
            size = this.posterSizes[2];
        }
        return this.baseImageUrl + size + imageUrl;
    }
    getProfileUrl(imageUrl, width) {
        let size = "";
        size = "w185";
        // if (width) {
        //   if (width > 500) {
        //     size = "w500";
        //   }
        // }
        // else {
        //   size = this.posterSizes[2];
        // }
        return this.baseImageUrl + size + imageUrl;
    }
    generateUrl(list) {
        let buildString = "";
        if (list && list.length > 0) {
            for (let i = 0; i < list.length; i++) {
                buildString += this.addQuery(list[i].key, list[i].value);
            }
        }
        return buildString;
    }
    addQuery(key, value) {
        let queryString = "";
        if (key == "sort_by") {
            queryString += "&sort_by=" + value;
        }
        else if (key == "page") {
            queryString += "&page=" + value;
        }
        else if (key == "year") {
            queryString += "&year=" + value;
        }
        else if (key == "with_genres") {
            queryString += "&with_genres=" + value.reduce(function (newStr, strFrag, ind) {
                if (ind != 0) {
                    newStr += "%2C";
                }
                return newStr + strFrag;
            });
            // for (let i = 0; i < value.length; i++) {
            //   if (i > 0) {
            //     queryString += "%2C";
            //   }
            //   queryString += value[i];
            // }
        }
        else if (key == "without_genres") {
            queryString += "&without_genres=" + value.reduce(function (newStr, strFrag, ind) {
                if (ind != 0) {
                    newStr += "%2C";
                }
                return newStr + strFrag;
            });
            // for (let i = 0; i < value.length; i++) {
            //   if (i > 0) {
            //     queryString += "%2C";
            //   }
            //   queryString += value[i];
            // }
        }
        else if (key == "release_date.gte") {
            queryString += "&release_date.gte=" + value;
        }
        else if (key == "release_date.lte") {
            queryString += "&release_date.lte=" + value;
        }
        else if (key == "primary_release_year") {
            queryString += "&primary_release_year=" + value;
        }
        else {
            return "";
        }
        return queryString;
    }
};
MovieService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], MovieService);
export { MovieService };
//# sourceMappingURL=movie.service.js.map