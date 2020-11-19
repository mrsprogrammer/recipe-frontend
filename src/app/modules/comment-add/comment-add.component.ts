import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CommentAddService } from "./comment-add.service";
import { Comment } from "../../model/comment";

@Component({
  selector: "comment-add",
  templateUrl: "./comment-add.component.html",
  styleUrls: ["./comment-add.component.scss"],
})
export class CommentAdd {
  @Input() recipeId: string;
  @Output() addCommentEvent = new EventEmitter<Comment>();

  form: FormGroup;
  commentAddService: CommentAddService;

  constructor(fb: FormBuilder, commentAddService: CommentAddService) {
    this.form = fb.group({
      content: ["", Validators.required],
    });
    this.commentAddService = commentAddService;
  }

  onSubmit() {
    this.commentAddService
      .addComment({ id_recipe: this.recipeId.toString(), ...this.form.value })
      .subscribe((newComment) => {
        this.addCommentEvent.emit(newComment);
      });
  }
}
