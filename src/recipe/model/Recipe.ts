import Ingredients from "./Ingredients";

export default class Recipe {
  readonly id: string;
  readonly name: string;
  readonly categoryId: string;
  readonly categoryName: string;
  readonly duration: number;
  readonly complexity: string;
  readonly people: number;
  readonly recommended: number;
  readonly ingredients: Ingredients;
  readonly description: string;
  readonly photo: string;

  constructor(
      id: string,
      name: string,
      categoryId: string,
      categoryName: string,
      duration: number,
      complexity: string,
      people: number,
      recommended: number,
      ingredients: string,
      description: string,
      photo: string
  ) {
    this.id = id;
    this.name = name;
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.duration = duration;
    this.complexity = complexity;
    this.people = people;
    this.recommended = recommended;
    this.ingredients = new Ingredients(ingredients);
    this.description = description;
    this.photo = photo;
  }


  static fromPrimitives(
    { id, name, categoryId, categoryName, duration, complexity, people, recommended, ingredients, description, photo }:
    { id: string,
      name: string,
      categoryId: string,
      categoryName: string,
      duration: number,
      complexity: string,
      people: number,
      recommended: number,
      ingredients: string,
      description: string,
      photo: string
    }) : Recipe
    {
      return new Recipe(id, name, categoryId, categoryName, duration, complexity, people, recommended, ingredients, description, photo);
    }


    toPrimitives() {
      return {
        id: this.id,
        name: this.name,
        categoryId: this.categoryId,
        categoryName: this.categoryName,
        duration: this.duration,
        complexity: this.complexity,
        people: this.people,
        recommended: this.recommended,
        ingredients: this.ingredients.value,
        description: this.description,
        photo: this.photo
      };
    }


}