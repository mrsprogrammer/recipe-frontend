import { Component, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { switchMap } from "rxjs/operators";
import { GlobalConstants } from "../../common/global-constants";
import { Recipe as RecipeModel } from "../../model/recipe";
import { RecipeService } from "./recipe.service";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.scss"],
  providers: [RecipeService],
})
export class RecipeComponent implements OnDestroy {
  recipe: RecipeModel;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {
    this.subscription = this.route.params
      .pipe(switchMap(({ id }) => this.recipeService.getRecipe(id)))
      .subscribe(({ image, ...rest }) => {
        this.recipe = {
          ...rest,
          image: `${GlobalConstants.imagesURL}/${image}`,
        };
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
