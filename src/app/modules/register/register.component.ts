import { Component, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { SnackBarService } from "../snack-bar/snack-bar.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnDestroy {
  form: FormGroup;
  subscription: Subscription;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: SnackBarService
  ) {
    this.form = this.fb.group({
      login: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit() {
    if (!this.form.value.login || !this.form.value.password) {
      return;
    }
    this.subscription = this.authService.register(this.form.value).subscribe(
      () => {
        this.snackBar.open("Zostałeś zarejestrowany.", "success");
        this.router.navigate(["/login"]);
      },
      () => {
        this.snackBar.open("Rejestracja nie powiodła się.", "error");
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
