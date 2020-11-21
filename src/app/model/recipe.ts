import { Comment } from "./comment";
type CategoryName = "cakes" | "salads" | "soups";
export class Recipe {
  public id: number;
  public image: string;
  public ingredients: string;
  public method: string;
  public title: string;
  public comments: Comment[];
  public categoryName: CategoryName;
  constructor(
    categoryName: CategoryName,
    comments: Comment[],
    id: number,
    image: string,
    ingredients: string,
    method: string,
    title: string
  ) {
    this.categoryName = categoryName;
    this.comments = comments;
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
    this.method = method;
    this.title = title;
  }
}
