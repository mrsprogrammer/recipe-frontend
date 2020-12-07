import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
// app
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
// components
import { CommentAddComponent } from "./modules/comment-add/comment-add.component";
import { CommentsComponent } from "./modules/comments/comments.component";
import { LayoutComponent } from "./modules/layout/layout.component";
import { LoginComponent } from "./modules/login/login.component";
import { LogoutComponent } from "./modules/logout/logout.component";
import { NotFoundComponent } from "./modules/not-found/not-found.component";
import { RecipeComponent } from "./modules/recipe/recipe.component";
import { RecipesComponent } from "./modules/recipes/recipes.component";
import { RegisterComponent } from "./modules/register/register.component";
import { SnackBarService } from "./modules/snack-bar/snack-bar.service";
// auth
import { AuthGuardService } from "./modules/auth/auth-guard.service";
import { AuthHttpInterceptor } from "./modules/auth/auth-http.interceptor";
import { AuthService } from "./modules/auth/auth.service";
// material
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    CommentAddComponent,
    CommentsComponent,
    LayoutComponent,
    LoginComponent,
    LogoutComponent,
    NotFoundComponent,
    RecipeComponent,
    RecipesComponent,
    RegisterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    // material modules
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
  ],
  providers: [
    AuthGuardService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    SnackBarService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
