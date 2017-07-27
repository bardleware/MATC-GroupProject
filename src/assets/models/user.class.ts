import {User} from "./user.interface";
import {MiniMovie} from "./movie-mini.interface";
import {MiniUser} from "./user-mini.interface";
import {AngularFireDatabase} from "angularfire2/database";

export class UserProfile implements User {
  password: string;
  displayName: string;
  userId: string;
  email: string;
  favoriteMovies: MiniMovie[];
  friends: MiniUser[];
  recommendedMovies: MiniMovie[];
  recommendedByFriends: MiniMovie[];

  constructor(userId: string, private auth: AngularFireDatabase) {
    this.userId = userId;
  }

  updateUser(user: User) {
    // this.firstName = user.firstName;
    // this.lastName = user.lastName;
    this.displayName = user.displayName;
    this.password = user.password;
    // this.gender = user.gender;
    this.email = user.email;
    // this.cellPhone = user.cellPhone;
    this.favoriteMovies = user.favoriteMovies;
    this.friends = user.friends;
    this.recommendedMovies = user.recommendedMovies;
    this.recommendedByFriends = user.recommendedByFriends;
    // this.city = user.city;
    // this.pic1 = user.pic1;
    // this.pic2 = user.pic2;
  }

}
