import Recipe from "../../recipe/model/Recipe";
import { RecommendedResponseData } from "./RecommendedResponse";

export default class RecommendedMapper {

  static map(recommendedResponseData: RecommendedResponseData): Recipe {
    return Recipe.fromPrimitives({ ...recommendedResponseData, id: recommendedResponseData._id });
  }
}
