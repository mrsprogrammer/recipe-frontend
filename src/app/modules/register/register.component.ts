import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";

// może jeden plik do styli wrappera
// pokazać komunikaty błędu i sukcesu
// wszystkie komponenty mają mieć selector z prefixem app-
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  retUrl: string = "/";
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      login: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit() {
    this.authService.register(this.form.value).subscribe(() => {
      this.router.navigate(["/login"]);
    });
  }
}