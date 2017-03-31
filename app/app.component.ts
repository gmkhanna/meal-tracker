import { Component } from '@angular/core';
import { Meal } from './meal.model'

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <h1>Meal Tracker</h1>
  <meal-list [childMealList]="mealList"></meal-list>

  </div>
  `
})


export class AppComponent {
  mealList: Meal[] = [
    new Meal ('Butter Chicken', 400, 'No butter used- used olive oil'),
    new Meal ('Eggplant Curry', 215, 'Had 2 servings'),
    new Meal ('Pizza', 380, '3 slices; one veggie'),
    new Meal ('Granola Bars', 65, 'Homemade; healthy, with a little sugar.'),
  ];

  selectedMeal = null;

}
