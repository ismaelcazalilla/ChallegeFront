import { RecommendedResponse } from "./RecommendedResponse";


export default class RecommendedService {

  static async getAll(): Promise<RecommendedResponse> {
    const response = await fetch(process.env.REACT_APP_RECOMMENDED_ENDPOINT);

    if (!response.ok) {
      throw new Error('Recommendations could not been fetched');
    }
    
    return response.json();
  }
}