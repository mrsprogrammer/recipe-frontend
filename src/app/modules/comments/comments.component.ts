import { Component, NgModule, OnInit } from "@angular/core";
import { Comment as CommentModel } from "../../model/comment";

@Component({
  selector: "comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.scss"],
})
export class Comments implements OnInit {
  constructor() {}

  ngOnInit() {}
}
