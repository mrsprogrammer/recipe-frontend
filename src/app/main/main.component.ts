import { Component, NgModule, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
})
export class Main implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Simple GET request with response type <any>
    this.http
      .get<any>("http://localhost:8080/api/members")
      .subscribe((data) => {
        console.log(data);
      });
  }
}
