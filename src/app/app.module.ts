import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
// components
import { AppComponent } from "./app.component";
import { MenuComponent } from "./layout/menu/menu.component";
// modules
import { CommentAddComponent } from "./modules/comment-add/comment-add.component";
import { CommentsComponent } from "./modules/comments/comments.component";
import { LoginComponent } from "./modules/login/login.component";
import { RecipesComponent } from "./modules/recipes/recipes.component";
import { RecipeComponent } from "./modules/recipe/recipe.component";
import { AuthGuardService } from "./modules/auth/auth-guard.service";
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
import { NotFoundComponent } from "./modules/not-found/not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    CommentAddComponent,
    CommentsComponent,
    RecipesComponent,
    RecipeComponent,
    MenuComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // material modules
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
