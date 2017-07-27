export class UserProfile {
    constructor(userId, auth) {
        this.auth = auth;
        this.userId = userId;
    }
    updateUser(user) {
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
//# sourceMappingURL=user.class.js.map