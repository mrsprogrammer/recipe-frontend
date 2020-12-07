import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { SnackBarService } from "../snack-bar/snack-bar.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  retUrl: string = "/";
  form: FormGroup;
  subscription: Subscription[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
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

  ngOnInit() {
    this.subscription.push(
      this.activatedRoute.queryParamMap.subscribe((params) => {
        this.retUrl = params.get("retUrl");
      })
    );
  }

  onSubmit() {
    if (!this.form.value.login || !this.form.value.password) {
      return;
    }
    this.subscription.push(
      this.authService.login(this.form.value).subscribe(
        () => {
          this.snackBar.open("Zostałeś zalogowany.", "success");
          if (this.retUrl !== null) {
            this.router.navigate([this.retUrl]);
          } else {
            this.router.navigate(["/"]);
          }
        },
        () => {
          this.snackBar.open("Logowanie nie powiodło się.", "error");
        }
      )
    );
  }

  ngOnDestroy() {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
