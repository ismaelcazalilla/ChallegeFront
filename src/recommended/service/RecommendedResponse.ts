export interface RecommendedResponse {
  data: RecommendedResponseData[],
  limit: number,
  skip: number,
  total: number  
}

export interface RecommendedResponseData {
  _id: string,
  name: string,
  categoryId: string,
  categoryName: string,
  duration: number,
  complexity: string,
  people: number,
  recommended: number,
  ingredients: string,
  description: string,
  photo: string,
  createdAt: string,
  updatedAt: string,
  __v: number
}
