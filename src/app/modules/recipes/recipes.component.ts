import { Component, NgModule, OnInit } from "@angular/core";
import { GlobalConstants } from "../../common/global-constants";
import { Recipe as RecipeModel } from "../../model/recipe";
import { RecipesService } from "./recipes.service";

@Component({
  selector: "recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"],
})
export class Recipes implements OnInit {
  recipes: RecipeModel[] = [];

  constructor(recipesService: RecipesService) {
    recipesService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes.map(({ image, method, ...rest }) => ({
        ...rest,
        image: `${GlobalConstants.imagesURL}/${image}`,
        method: method.substr(0, 250) + "...",
      }));
    });
  }

  ngOnInit() {}
}
