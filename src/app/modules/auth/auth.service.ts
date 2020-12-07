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
  }

  logoutUser(retUrl: string): void {
    this.isloggedIn = false;
    this.removeToken();

    if (!this.router.url.includes("login")) {
      this.router.navigate(["login"], {
        queryParams: { retUrl },
      });
    }
  }

  register({ login, password }: Pick<User, "login" | "password">) {
    if (!login || !password) {
      return;
    }

    return this.http.post<{ token: string }>(
      `${GlobalConstants.apiURL}/users/register`,
      {
        login,
        password,
      }
    );
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  setToken(token) {
    localStorage.setItem("token", token);
  }

  removeToken() {
    localStorage.removeItem("token");
  }

  getToken() {
    return localStorage.getItem("token");
  }
}
