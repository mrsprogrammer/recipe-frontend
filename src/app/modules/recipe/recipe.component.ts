import { Component, NgModule, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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
export class RecipeComponent implements OnInit {
  recipe: RecipeModel;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {
    this.route.params
      .pipe(switchMap(({ id }) => this.recipeService.getRecipe(id)))
      .subscribe(({ image, ...rest }) => {
        this.recipe = {
          ...rest,
          image: `${GlobalConstants.imagesURL}/${image}`,
        };
      });
  }

  ngOnInit() {}
}
