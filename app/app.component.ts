import { Component } from '@angular/core';
import { Meal } from './meal.model'

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <h1>Meal Tracker</h1>
  <!-- <h3 *ngFor="let calTotal of mealList | total-cals:showTotal">Total Calories Consumed</h3> -->
  <new-meal (infoSender)="toAddMeal($event)"></new-meal>
  <meal-list [childMealList]="mealList" (editEvent)="toEditMeal($event)"></meal-list>
  <edit-meal [childSelectedMeal]="selectedMeal" (hideEditForm)="finishedEditing()"></edit-meal>

<!-- <total-calories [childMealList]="mealList" (totalInfoSender)=showTotal($event)></total-calories> -->

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

  toAddMeal(mealInfoFromForm: Meal) {
    this.mealList.push(mealInfoFromForm);
  }

  toEditMeal(specMeal) {
    this.selectedMeal = specMeal;
  }

  // showTotal(total) {
  //   this.
  // }

  finishedEditing() {
    this.selectedMeal = null;
  }

}
