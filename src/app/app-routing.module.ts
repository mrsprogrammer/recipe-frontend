import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { Main } from "./main/main.component";
import { Recipe } from "./recipe/recipe.component";

const routes: Routes = [
  {
    path: "main",
    component: Main,
    data: { title: "Main" },
  },
  {
    path: "all",
    component: Recipe,
    data: { title: "Cookbook" },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/recipe" }],
})
export class AppRoutingModule {}
