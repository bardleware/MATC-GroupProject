
import {MiniMovie} from "./movie-mini.interface";

export class MinifiedMovie implements MiniMovie {
  movieId: string | number;
  title: string;
  releaseDate: Date;

  constructor(movieId: string | number, title: string, releaseDate: Date) {
    this.movieId = movieId;
    this.title = title;
    this.releaseDate = releaseDate;
  }

}
