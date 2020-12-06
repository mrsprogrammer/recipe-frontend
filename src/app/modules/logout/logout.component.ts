import { Component } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Location } from "@angular/common";

@Component({
  selector: "logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.scss"],
})
export class LogoutComponent {
  constructor(private authService: AuthService, private location: Location) {}

  logout() {
    this.authService.logoutUser(this.location.path());
  }
}
