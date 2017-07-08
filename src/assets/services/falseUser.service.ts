import {Injectable} from "@angular/core"
import {User} from "../models/user.interface"
import {Http, Response} from "@angular/http";
import "rxjs"
import {Observable} from "rxjs/Observable";

@Injectable()
export class FalseUserService {

  constructor(private http: Http) {}


  private getUsers(): Observable<any> {

    return this.http.get("https://randomuser.me/api/")
      .map( (response: Response) => {return response.json()});
  }

  arrangeData() {
    this.getUsers().subscribe( response => {
      let res = response.results;
      for (let i = 0; i < res.length; i++) {
        // let user: User = {firstName: res[i].name.first, lastName: res[i].name.last, gender: res[i].gender, email: res[i].email};

      }
      console.log(response.results);
    })
  }

}
