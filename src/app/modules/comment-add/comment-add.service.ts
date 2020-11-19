import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GlobalConstants } from "../../common/global-constants";
import { Comment } from "../../model/comment";

@Injectable({
  providedIn: "root",
})
export class CommentAddService {
  constructor(private http: HttpClient) {}

  addComment = (payload: Pick<Comment, "id_recipe" | "content">) =>
    this.http.post<Comment>(
      `${GlobalConstants.apiURL}/comments/create`,
      payload
    );
}
