import { Component, NgModule, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GlobalConstants } from "../common/global-constants";
import { Recipe as RecipeModel } from "../model/recipe";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
})
export class Recipe implements OnInit {
  constructor(private http: HttpClient) {}
  recipes: RecipeModel[] = [];
  src: string =
    "home/justyna/Documents/STUDIA/RECIPE/images/tarta_czekoladowa.jpg";
  ngOnInit() {
    this.http
      .get<RecipeModel[]>(`${GlobalConstants.apiURL}/recipes`)
      .subscribe((recipes) => {
        console.log(recipes);
        this.recipes = recipes.map(({ image, ...rest }) => ({
          ...rest,
          image: `${GlobalConstants.imagesURL}/${image}`,
        }));
      });
  }
}
