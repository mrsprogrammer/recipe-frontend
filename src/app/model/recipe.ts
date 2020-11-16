import { Comment } from "./comment";
export class Recipe {
  public id: number;
  public image: string;
  public ingredients: string;
  public method: string;
  public title: string;
  public comments: Comment[];
  constructor(
    comments: Comment[],
    id: number,
    image: string,
    ingredients: string,
    method: string,
    title: string
  ) {
    this.comments = comments;
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
    this.method = method;
    this.title = title;
  }
}
