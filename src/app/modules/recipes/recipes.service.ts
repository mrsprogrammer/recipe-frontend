import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GlobalConstants } from "../../common/global-constants";
import { Recipe as RecipeModel } from "../../model/recipe";

@Injectable({
  providedIn: "root",
})
export class RecipesService {
  constructor(private http: HttpClient) {}

  getRecipes = (category?: RecipeModel["categoryName"]) =>
    this.http.get<RecipeModel[]>(
      `${GlobalConstants.apiURL}/recipes/${category || ""}`
    );
}
