import RecommendedService from "../../../recommended/service/RecommendedService";

describe('RecipeService', () => {

  it('should fetch valid recommended recipes', async () => {
    const expectedKeys = [
      '_id',
      'name',
      'categoryId',
      'categoryName',
      'duration',
      'complexity',
      'people',
      'recommended',
      'ingredients',
      'description',
      'photo',
      'createdAt',
      'updatedAt',
      '__v'
    ];

    const { data } = await RecommendedService.getAll();

    expect(data.length).toEqual(2);
    expect(Object.keys(data.shift())).toEqual(expectedKeys);
  });

});
