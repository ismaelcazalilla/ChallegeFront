export default class Ingredients {
  readonly value: string;

  constructor(value: string) {
    ensureIngredientsIsValid(value);
    this.value = value;
  }

  public splitIngredients(): string[] {
    return this.value.split("\r\n");
  }
}

const ensureIngredientsIsValid = (value: string): void => {
  if (!value || typeof value !== 'string') {
    throw new TypeError(`Value <${value}> is not a valid string. Type: ${typeof value}`);
  }
}
