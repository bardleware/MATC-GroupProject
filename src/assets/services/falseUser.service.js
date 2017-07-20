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
let FalseUserService = class FalseUserService {
    constructor(http) {
        this.http = http;
    }
    getUsers() {
        return this.http.get("https://randomuser.me/api/")
            .map((response) => { return response.json(); });
    }
    arrangeData() {
        this.getUsers().subscribe(response => {
            let res = response.results;
            for (let i = 0; i < res.length; i++) {
                // let user: User = {firstName: res[i].name.first, lastName: res[i].name.last, gender: res[i].gender, email: res[i].email};
            }
            console.log(response.results);
        });
    }
};
FalseUserService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], FalseUserService);
export { FalseUserService };
//# sourceMappingURL=falseUser.service.js.map