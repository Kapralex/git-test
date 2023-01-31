// Реализуйте следующие методы экземпляра для класса `Recipe`:

// - `isLowCaloric`, который возвращает `true`, когда калорийность рецепта составляет 400 или ниже и `false` в противном случае.
// - `isHighCaloric`, который возвращает `true`, когда калорийность рецепта составляет 600 или выше и `false` в противном случае.
/* recipe.js */

// class definition
export default class Recipe {
  constructor(calories) {
    this.calories = calories;
  }

  isLowCaloric() {
    return this.calories <= 400;
  }

  isHighCaloric() {
    return this.calories >= 600;
  }
}
