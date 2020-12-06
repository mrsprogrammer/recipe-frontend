import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Location } from "@angular/common";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { catchError } from "rxjs/operators";

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private location: Location) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`,
      },
    });
    return next.handle(authRequest).pipe(
      catchError((error) => {
        if (error.status === 401) {
          this.authService.logoutUser(this.location.path());
        }
        throw error;
      })
    );
  }
}
