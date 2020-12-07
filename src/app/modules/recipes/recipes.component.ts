import { Component, NgModule, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { GlobalConstants } from "../../common/global-constants";
import { Recipe as RecipeModel } from "../../model/recipe";
import { RecipesService } from "./recipes.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"],
  providers: [RecipesService],
})
export class RecipesComponent {
  recipes: RecipeModel[] = [];
  categoryRouteParam?: RecipeModel["categoryName"];

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) {
    this.route.params
      .pipe(
        switchMap(({ category }) => {
          this.categoryRouteParam = category;
          return this.recipesService.getRecipes(category);
        })
      )
      .subscribe((recipes) => {
        this.recipes = recipes.map(({ image, method, ...rest }) => ({
          ...rest,
          image: `${GlobalConstants.imagesURL}/${image}`,
          method: method.substr(0, 250) + "...",
        }));
      });
  }
}
