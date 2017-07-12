import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs";
import {QueryInfo} from "../models/queryInfo.interface";

@Injectable()
export class MovieService {

  //Unique Movie Url has https://api.themoviedb.org/3/movie/{movie_id}?api_key={apiKey}
  private specificMovieUrl = "https://api.themoviedb.org/3/movie/";
  private discoveryUrl = "https://api.themoviedb.org/3/discover/movie";
  private genreListUrl = "https://api.themoviedb.org/3/genre/movie/list";
  private apiKey: string = "9d1d4c863da80cfbbfdfc5d7b3c456b0";
  private baseImageUrl = "https://image.tmdb.org/t/p/";
  private profileSizes = ["w45", "w185", "h632"];
  private posterSizes = ["w92", "w154", "w300", "w500"];

  constructor(private http: Http) {}

  getMovie(movieId: string | number): Observable<any> {
    let url = this.specificMovieUrl + movieId + "/credits" + "?api_key=" + this.apiKey + "&language=en-US";
    return this.http.get(url)
      .map( (response: Response) => {return response.json()});
  }

  discoverMovies(list?: QueryInfo[]): Observable<any> {
    let url = this.discoveryUrl + "?api_key=" + this.apiKey + "&language=en-US&include_adult=false&include_video=false";
    let buildUrl = url + this.generateUrl(list);
    return this.http.get(buildUrl)
      .map( (response: Response) => {return response.json()})
  }

  getMovieCredits(movieId: string | number) {
    let url = this.specificMovieUrl + movieId + "/images" + "?api_key" + this.apiKey;
    return this.http.get(url)
      .map( (response: Response) => {return response.json()});
  }

  getMovieImageDetails(movieId: string | number) {
    let url = this.specificMovieUrl + movieId + "/images" + "?api_key" + this.apiKey;
    return this.http.get(url)
      .map( (response: Response) => {return response.json()});
  }

  getVideos(movieId: string | number) {
    let url = this.specificMovieUrl + movieId + "/videos" + "?api_key=" + this.apiKey + "&language=en-US";
    return this.http.get(url)
      .map( (response: Response) => {return response.json()});
  }

  getGenreList(): Observable<any> {
    let url = this.genreListUrl + "?api_key=" + this.apiKey + "&language=en-US";
    return this.http.get(url)
      .map( (response: Response) => {return response.json()})
  }

  getPosterUrl(imageUrl: string, width?: number): string {
    let size: string = "";
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

  getProfileUrl(imageUrl: string, width?: number): string {
    let size: string = "";
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

  private generateUrl(list?: QueryInfo[]): string {
    let buildString = "";
    if (list && list.length > 0) {
      for (let i = 0; i < list.length; i++) {
        buildString += this.addQuery(list[i].key, list[i].value);
      }
    }
    return buildString;
  }

  private addQuery(key: string, value: any): string {
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
}
