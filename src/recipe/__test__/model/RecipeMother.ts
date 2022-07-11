import Recipe from "../../model/Recipe";
import { RecommendedResponseData } from "../../../recommended/service/RecommendedResponse";
import { RecipeResponseData } from "../../service/RecipeResponse";

export default class RecipeMother {

  static create(): Recipe {
    return Recipe.fromPrimitives({
      "id": "616d912b807e01aaeea0e411",
      "name": "someName",
      "categoryId": "1",
      "categoryName": "someCategoryName",
      "duration": 11,
      "complexity": "someComplexity",
      "people": 3,
      "recommended": 1,
      "ingredients": "someIngredients",
      "description": "someDescription",
      "photo": "https://www.themealdb.com/images/media/meals/1520084413.jpg"
    })
  }

  static fromRecommendedData(recommendedData: RecommendedResponseData): Recipe {
    return Recipe.fromPrimitives({ ...recommendedData, id: recommendedData._id });
  }

  static fromRecipeData(recipeData: RecipeResponseData): Recipe {
    return Recipe.fromPrimitives({ ...recipeData, id: recipeData._id });
  }
}
