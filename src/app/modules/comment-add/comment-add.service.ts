import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GlobalConstants } from "../../common/global-constants";

@Injectable({
  providedIn: "root",
})
export class CommentAddService {
  constructor(private http: HttpClient) {}

  addComment = (values: string) => {
    console.log("addComment");
    return this.http.post(`${GlobalConstants.apiURL}/recipes/create`, values);
  };
}
