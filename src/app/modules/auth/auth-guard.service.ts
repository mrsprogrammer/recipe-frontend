import { Injectable } from "@angular/core";
import { Location } from "@angular/common";
import { CanActivate, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private location: Location) {}

  canActivate(): boolean | UrlTree {
    if (!this.authService.isUserLoggedIn()) {
      this.authService.logoutUser(this.location.path());

      return false;
    }

    return true;
  }
}
