import Recipe from "../../recipe/model/Recipe";

export interface RecommendedState {
  recommended: {
    list: Recipe[]
  }
}
