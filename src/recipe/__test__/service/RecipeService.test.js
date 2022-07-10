import RecipeService from "../../service/RecipeService";

describe('RecipeService', () => {

  it('should fetch 10 valid recipes from API', async () => {
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

    const { data } = await RecipeService.getAll();

    expect(data.length).toEqual(10);
    expect(Object.keys(data.shift())).toEqual(expectedKeys);
  });

});
