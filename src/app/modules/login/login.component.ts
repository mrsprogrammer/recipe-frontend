import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  invalidCredentialMsg: string;
  retUrl: string = "/";
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = this.fb.group({
      login: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.retUrl = params.get("retUrl");
    });
  }

  onSubmit() {
    this.authService.login(this.form.value).subscribe((data) => {
      if (this.retUrl !== null) {
        this.router.navigate([this.retUrl]);
      } else {
        this.router.navigate(["/"]);
      }
    });
  }
}
