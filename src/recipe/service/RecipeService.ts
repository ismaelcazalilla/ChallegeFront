
import { RecipeResponse } from "./RecipeResponse";

export default class RecipeService {

  static async getAll(): Promise<RecipeResponse> {
    const response = await fetch(process.env.REACT_APP_RECIPE_ENDPOINT);

    if (!response.ok) {
      throw new Error('Recipes could not been fetched');
    } 
    
    return response.json();
  }
}