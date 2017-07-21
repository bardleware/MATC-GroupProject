
import {MiniMovie} from "./movie-mini.interface";
import {MiniUser} from "./user-mini.interface";

export interface User {
  firstName: string;
  lastName: string;
  password: string;
  userId: string;
  gender: string;
  email: string;
  cellPhone: string;
  favoriteMovies: MiniMovie[];
  friends: MiniUser[];
  recommendedMovies: MiniMovie[];
  recommendedByFriends: MiniMovie[];
  city: string;
  pic1: string;
  pic2: string;
}

