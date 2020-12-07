import { Component, Input, OnInit } from "@angular/core";
import { Comment as CommentModel } from "../../model/comment";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.scss"],
})
export class CommentsComponent {
  @Input() recipeId: string;
  @Input() comments: CommentModel[];
  isCommentAddFormOpened: boolean = false;

  constructor() {}

  addComment(comment: CommentModel) {
    this.comments.push(comment);
    this.isCommentAddFormOpened = false;
  }

  openCommentAddForm() {
    this.isCommentAddFormOpened = true;
  }
}
