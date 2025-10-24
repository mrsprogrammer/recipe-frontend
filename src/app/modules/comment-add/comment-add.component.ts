import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { Comment } from "../../model/comment";
import { SnackBarService } from "../snack-bar/snack-bar.service";
import { CommentAddService } from "./comment-add.service";

@Component({
  selector: "app-comment-add",
  templateUrl: "./comment-add.component.html",
  styleUrls: ["./comment-add.component.scss"],
  providers: [CommentAddService],
})
export class CommentAddComponent implements OnDestroy {
  @Input() recipeId: string;
  @Output() addCommentEvent = new EventEmitter<Comment>();

  form: UntypedFormGroup;
  subscription: Subscription;

  constructor(
    private commentAddService: CommentAddService,
    private fb: UntypedFormBuilder,
    private snackBar: SnackBarService
  ) {
    this.form = this.fb.group({
      content: ["", Validators.required],
    });
  }

  onSubmit() {
    this.subscription = this.commentAddService
      .addComment({
        id_recipe: this.recipeId.toString(),
        ...this.form.value,
      })
      .subscribe(
        (newComment) => {
          this.addCommentEvent.emit(newComment);
          this.snackBar.open("Komentarz został dodany.", "success");
        },
        () => {
          this.snackBar.open("Nie udało się dodać komentarza.", "error");
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
