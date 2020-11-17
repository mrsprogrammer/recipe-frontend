import { Component, NgModule, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { GlobalConstants } from "../../common/global-constants";
import { Recipe as RecipeModel } from "../../model/recipe";
import { RecipeService } from "./recipe.service";

@Component({
  selector: "recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.scss"],
})
export class Recipe implements OnInit {
  recipe: RecipeModel;

  constructor(private route: ActivatedRoute, recipeService: RecipeService) {
    this.route.params
      .pipe(switchMap(({ id }) => recipeService.getRecipe(id)))
      .subscribe(({ image, ...rest }) => {
        this.recipe = {
          ...rest,
          image: `${GlobalConstants.imagesURL}/${image}`,
        };
      });
  }

  ngOnInit() {}
}
