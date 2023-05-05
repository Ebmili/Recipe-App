import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Tasty Schnitzel',
    'https://images.pexels.com/photos/12035744/pexels-photo-12035744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),

    new Recipe('Burger', 'Delicious burger',
    'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]),
];

constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}