import { Component, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
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
export class RecipesComponent implements OnDestroy {
  recipes: RecipeModel[] = [];
  categoryRouteParam?: RecipeModel["categoryName"];
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) {
    this.subscription = this.route.params
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
