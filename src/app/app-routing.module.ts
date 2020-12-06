import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { LoginComponent } from "./modules/login/login.component";
import { RecipesComponent } from "./modules/recipes/recipes.component";
import { RecipeComponent } from "./modules/recipe/recipe.component";
import { GlobalConstants } from "./common/global-constants";
import { AuthGuardService } from "./modules/auth/auth-guard.service";
import { MenuComponent } from "./modules/menu/menu.component";
import { NotFoundComponent } from "./modules/not-found/not-found.component";
import { RegisterComponent } from "./modules/register/register.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "",
    component: MenuComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: ":category",
        component: RecipesComponent,
      },
      {
        path: ":category/:id",
        component: RecipeComponent,
        data: { title: "Przepis" },
      },
      {
        path: "",
        component: RecipesComponent,
        data: { title: "Przepisy kulinarne" },
      },
    ],
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: GlobalConstants.baseHref,
    },
  ],
})
export class AppRoutingModule {}
