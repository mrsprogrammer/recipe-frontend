import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { Login } from "./modules/login/login.component";
import { Recipes } from "./modules/recipes/recipes.component";
import { Recipe } from "./modules/recipe/recipe.component";
import { GlobalConstants } from "./common/global-constants";
import { AuthGuardService } from "./modules/auth/auth-guard.service";
import { MenuComponent } from "./layout/menu/menu.component";
import { NotFoundComponent } from "./modules/not-found/not-found.component";

const routes: Routes = [
  {
    path: "login",
    component: Login,
  },
  {
    path: "categories",
    component: MenuComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: ":category",
        component: Recipes,
      },
      {
        path: ":category/:id",
        component: Recipe,
        data: { title: "Przepis" },
      },
      {
        path: "",
        component: Recipes,
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
  providers: [{ provide: APP_BASE_HREF, useValue: GlobalConstants.baseHref }],
})
export class AppRoutingModule {}
