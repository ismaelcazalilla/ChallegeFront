import Recipe from "../model/Recipe";
import { RecipeResponseData } from "./RecipeResponse";

export default class RecipeMapper {


  static map(recipeResponse: RecipeResponseData): Recipe {
    return Recipe.fromPrimitives(
      {
        id: recipeResponse._id,
        name: recipeResponse.name,
        categoryId: recipeResponse.categoryId,
        categoryName: recipeResponse.categoryName,
        duration: recipeResponse.duration,
        complexity: recipeResponse.complexity,
        people: recipeResponse.people,
        recommended: recipeResponse.recommended,
        ingredients: recipeResponse.ingredients,
        description: recipeResponse.description,
        photo: recipeResponse.photo
      }
    );
  }
}
