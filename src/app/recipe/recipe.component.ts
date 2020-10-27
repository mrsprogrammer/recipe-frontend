import { Component, NgModule, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
})
export class Recipe implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Simple GET request with response type <any>
    this.http
      .get<any>("http://localhost:8080/api/recipes")
      .subscribe((data) => {
        console.log(data);
      });
  }
}
