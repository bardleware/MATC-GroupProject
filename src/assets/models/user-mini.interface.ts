
import {MiniMovie} from "./movie-mini.interface";
export interface MiniUser {
  uid: number| string;
  name: string;
  favoriteMovies: MiniMovie[];
}
