export class Comment {
  public id: number;
  public id_recipe: string;
  public content: string;
  constructor(id: number, id_recipe: string, content: string) {
    this.id = id;
    this.id_recipe = id_recipe;
    this.content = content;
  }
}
