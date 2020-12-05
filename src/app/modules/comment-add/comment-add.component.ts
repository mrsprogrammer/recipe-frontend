import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Comment } from "../../model/comment";
import { CommentAddService } from "./comment-add.service";

@Component({
  selector: "comment-add",
  templateUrl: "./comment-add.component.html",
  styleUrls: ["./comment-add.component.scss"],
  providers: [CommentAddService],
})
export class CommentAddComponent {
  @Input() recipeId: string;
  @Output() addCommentEvent = new EventEmitter<Comment>();

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private commentAddService: CommentAddService
  ) {
    this.form = this.fb.group({
      content: ["", Validators.required],
    });
  }

  onSubmit() {
    this.commentAddService
      .addComment({ id_recipe: this.recipeId.toString(), ...this.form.value })
      .subscribe((newComment) => {
        this.addCommentEvent.emit(newComment);
      });
  }
}
