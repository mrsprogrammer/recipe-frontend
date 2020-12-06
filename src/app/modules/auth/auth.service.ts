import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { tap } from "rxjs/operators";
import { GlobalConstants } from "src/app/common/global-constants";
import { User } from "src/app/model/user";

@Injectable()
export class AuthService {
  private isloggedIn: boolean;

  constructor(private http: HttpClient, private router: Router) {
    this.isloggedIn = !!this.getToken();
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
          this.setToken(response.token);
          this.isloggedIn = true;
          return of(this.isloggedIn);
        })
      );

    // return of(this.isloggedIn);
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  logoutUser(retUrl: string): void {
    this.isloggedIn = false;
    this.router.navigate(["login"], {
      queryParams: { retUrl },
    });
  }

  getToken() {
    return localStorage.getItem("token");
  }

  setToken(token) {
    localStorage.setItem("token", token);
  }

  // isAdminUser(): boolean {
  //   if (this.login == "Admin") {
  //     return true;
  //   }
  //   return false;
  // }
}
