import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-list',
  template: `
    <div>
      <h2>Logged Meals for the Day</h2>

      <div class="meal" *ngFor="let currentMeal of childMealList">
      <h4 class="name">Name: {{currentMeal.name}}</h4>
      <h4 class="calories">Calories: {{currentMeal.calories}}</h4>
      <h4 class="details">Details: {{currentMeal.details}}</h4>
      <button (click)="clickedEditButton(currentMeal)">Edit</button>
      </div>
    </div>
  `
})




export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() editEvent = new EventEmitter();

  clickedEditButton(editingMeal: Meal) {
    this.editEvent.emit(editingMeal);
  }

}
