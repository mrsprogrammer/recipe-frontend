import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { Main } from "./main/main.component";
import { Recipes } from "./modules/recipes/recipes.component";
import { Recipe } from "./modules/recipe/recipe.component";
import { GlobalConstants } from "./common/global-constants";

const routes: Routes = [
  {
    path: "main",
    component: Main,
    data: { title: "Main" },
  },
  {
    path: ":id",
    component: Recipe,
    data: { title: "Przepis" },
  },
  {
    path: "",
    component: Recipes,
    data: { title: "Przepisy kulinarne" },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: GlobalConstants.baseHref }],
})
export class AppRoutingModule {}
