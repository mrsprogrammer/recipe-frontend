import { Component } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Location } from "@angular/common";
import { SnackBarService } from "../snack-bar/snack-bar.service";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.scss"],
})
export class LogoutComponent {
  constructor(
    private authService: AuthService,
    private location: Location,
    private snackBar: SnackBarService
  ) {}

  logout() {
    this.authService.logoutUser(this.location.path());
    this.snackBar.open("Zostałeś wylogowany.", "success");
  }
}
