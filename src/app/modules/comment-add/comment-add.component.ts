import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CommentAddService } from "./comment-add.service";

@Component({
  selector: "comment-add",
  templateUrl: "./comment-add.component.html",
  styleUrls: ["./comment-add.component.scss"],
})
export class CommentAdd {
  form: FormGroup;
  commentAddService: CommentAddService;
  constructor(fb: FormBuilder, commentAddService: CommentAddService) {
    this.form = fb.group({
      content: ["", Validators.required],
    });
    this.commentAddService = commentAddService;
  }

  onSubmit() {
    this.commentAddService.addComment(this.form.value).subscribe();
  }
}
