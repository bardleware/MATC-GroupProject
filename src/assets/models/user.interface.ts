
import {MiniMovie} from "./movie-mini.interface";
import {MiniUser} from "./user-mini.interface";

export interface User {
  password: string;
  displayName: string;
  userId: string;
  email: string;
  favoriteMovies: MiniMovie[];
  friends: MiniUser[];
  recommendedMovies: MiniMovie[];
  recommendedByFriends: MiniMovie[];
}

