
import { RecipeResponse } from "./RecipeResponse";

export default class RecipeService {

  static async getAll(): Promise<RecipeResponse[]> {

    const response = await fetch('https://virated-api.herokuapp.com/recipes');

    if (!response.ok) {
      throw new Error('Recipes could not been fetched');
    } 
    
    return response.json();
  }
}