import { Component, NgModule, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GlobalConstants } from "../../common/global-constants";
import { Recipe as RecipeModel } from "../../model/recipe";

@Component({
  selector: "recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.scss"],
})
export class Recipe implements OnInit {
  constructor(private http: HttpClient) {}
  recipes: RecipeModel[] = [];

  ngOnInit() {
    this.http
      .get<RecipeModel[]>(`${GlobalConstants.apiURL}/recipes`)
      .subscribe((recipes) => {
        console.log(recipes);
        this.recipes = recipes.map(({ image, method, ...rest }) => ({
          ...rest,
          image: `${GlobalConstants.imagesURL}/${image}`,
          method: method.substr(0, 250) + "...",
        }));
      });
  }
}
