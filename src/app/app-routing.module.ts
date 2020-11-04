import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { Main } from "./main/main.component";
import { Recipe } from "./modules/recipe/recipe.component";
import { RecipeId } from "./modules/recipeId/recipeId.component";

const routes: Routes = [
  {
    path: "main",
    component: Main,
    data: { title: "Main" },
  },
  {
    path: ":id",
    component: RecipeId,
    data: { title: "Przepis" },
  },
  {
    path: "",
    component: Recipe,
    data: { title: "Przepisy kulinarne" },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/recipe" }],
})
export class AppRoutingModule {}
