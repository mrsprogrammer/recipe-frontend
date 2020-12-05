import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { GlobalConstants } from "src/app/common/global-constants";
import { User } from "src/app/model/user";

@Injectable()
export class AuthService {
  private isloggedIn: boolean;

  constructor(private http: HttpClient) {
    this.isloggedIn = false;
  }

  login({ login, password }: Pick<User, "login" | "password">) {
    if (!login || !password) {
      return;
    }

    return this.http
      .post<{ token: string }>(`${GlobalConstants.apiURL}/users/login`, {
        login,
        password,
      })
      .pipe(
        tap((response) => {
          console.log("token", response.token);
          localStorage.setItem("token", response.token);
          this.isloggedIn = true;
          return of(this.isloggedIn);
        })
      );

    // return of(this.isloggedIn);
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  // isAdminUser(): boolean {
  //   if (this.login == "Admin") {
  //     return true;
  //   }
  //   return false;
  // }

  logoutUser(): void {
    this.isloggedIn = false;
  }
}
