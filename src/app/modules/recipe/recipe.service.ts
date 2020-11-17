import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GlobalConstants } from "../../common/global-constants";
import { Recipe as RecipeModel } from "../../model/recipe";

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  getRecipe = (id: string) =>
    this.http
      .get<RecipeModel>(`${GlobalConstants.apiURL}/recipes/${id}`)
      .pipe((recipe) => recipe);
}
