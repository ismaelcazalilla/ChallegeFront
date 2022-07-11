import { RecipeResponse, RecipeResponseData } from "../../service/RecipeResponse"

export class RecipeResponseMother {

  static create(): RecipeResponse {
    return {
      "total": 1,
      "limit": 10,
      "skip": 0,
      "data": [ RecipeResponseDataMother.create() ]
    }
  }
}

export class RecipeResponseDataMother {

  static create(): RecipeResponseData {
    return {
      "_id": "616d912b807e01aaeea0e411",
      "name": "someName",
      "categoryId": "1",
      "categoryName": "someCategoryName",
      "duration": 11,
      "complexity": "someComplexity",
      "people": 3,
      "recommended": 1,
      "ingredients": "someIngredients",
      "description": "someDescription",
      "photo": "https://www.themealdb.com/images/media/meals/1520084413.jpg",
      "createdAt": "2021-10-18T15:22:19.771Z",
      "updatedAt": "2021-10-18T15:22:19.771Z",
      "__v": 0
      }
  }
}