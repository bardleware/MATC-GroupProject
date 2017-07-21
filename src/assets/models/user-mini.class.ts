
import {MiniUser} from "./user-mini.interface";
import {MiniMovie} from "./movie-mini.interface";
import {MinifiedMovie} from "./movie-mini.class";

export class MinifiedUser implements MiniUser {
  uid: string | number;
  name: string;
  favoriteMovies: MiniMovie[];

  constructor(uid: string| number, name: string, favoriteMovies: MiniMovie[]) {
    this.uid = uid;
    this.name = name;
    this.favoriteMovies = favoriteMovies;
  }

}
