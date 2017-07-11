import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs";
import {QueryInfo} from "../models/queryInfo.interface";

@Injectable()
export class MovieService {

  //Unique Movie Url has https://api.themoviedb.org/3/movie/{movie_id}?api_key={apiKey}
  private specificMovieUrl = "https://api.themoviedb.org/3/movie/"
  private discoveryUrl = "https://api.themoviedb.org/3/discover/movie";
  private genreListUrl = "https://api.themoviedb.org/3/genre/movie/list"
  private apiKey: string = "9d1d4c863da80cfbbfdfc5d7b3c456b0";


  constructor(private http: Http) {}

  getMovie(movieId: string | number) {
    let url = this.genreListUrl + "?api_key="+this.apiKey + "&language=en-US";
    return this.http.get(url)
      .map( (response: Response) => {return response.json()})
  }

  discover(list?: QueryInfo[]): Observable<any> {
    return this.http.get(this.discoveryUrl+"?api_key="+this.apiKey+"&language=en-US"+this.generateUrl())
      .map( (response: Response) => {return response.json()})
  }

  private generateUrl(list?: QueryInfo[]): string {
    let buildString = "";
    for (let i = 0; i < list.length; i++) {
      if (list[i].key == "year") {
        buildString += "&year="+list[i].value;
      }
      if (list[i].key == "genres") {
        buildString += "&with_genres="
        for (let j = 0; j < list[i].value.length; j++) {
          if (j != 0) {
            buildString += "%2C"
          }
          buildString += ""+list[i].value[j]
        }
      }
    }
    return buildString;
  }

}
