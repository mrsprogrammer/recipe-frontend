import { Component, NgModule, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { switchMap } from "rxjs/operators";
import { GlobalConstants } from "../../common/global-constants";
import { Recipe as RecipeModel } from "../../model/recipe";

@Component({
  selector: "recipe-id",
  templateUrl: "./recipeId.component.html",
  styleUrls: ["./recipeId.component.scss"],
})
export class RecipeId implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  id: string;
  recipe: RecipeModel;

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap(({ id }) =>
          this.http
            .get<RecipeModel>(`${GlobalConstants.apiURL}/recipes/${id}`)
            .pipe((recipe) => recipe)
        )
      )
      .subscribe(({ image, ...rest }) => {
        this.recipe = {
          ...rest,
          image: `${GlobalConstants.imagesURL}/${image}`,
        };
      });
  }
}
