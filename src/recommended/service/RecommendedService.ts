import { RecommendedResponse } from "./RecommendedResponse";


export default class RecommendedService {

  static async getAll(): Promise<RecommendedResponse[]> {

    const response = await fetch('https://virated-api.herokuapp.com/recipes?recommended=1');

    if (!response.ok) {
      throw new Error('Recommendations could not been fetched');
    } 
    
    return response.json();
  }
}