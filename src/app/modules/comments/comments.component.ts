import { Component, Input, OnInit } from "@angular/core";
import { Comment as CommentModel } from "../../model/comment";

@Component({
  selector: "comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.scss"],
})
export class Comments implements OnInit {
  @Input() comments: CommentModel[];
  isCommentAddFormOpened: boolean = false;

  constructor() {}

  ngOnInit() {}

  openCommentAddForm() {
    this.isCommentAddFormOpened = true;
  }
}
