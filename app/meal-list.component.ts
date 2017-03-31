import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-list',
  template: `
    <div>
      <h2>Logged Meals for the Day</h2>

      <div class="meal row">
        <div class="col-sm-3 list-div" *ngFor="let currentMeal of childMealList">
          <div class="content">
            <h5 class="name">Name: {{currentMeal.name}}</h5>
            <h5 class="calories">Calories: {{currentMeal.calories}}</h5>
            <h5 class="details">Details: {{currentMeal.details}}</h5>
            <button (click)="clickedEditButton(currentMeal)">Edit</button>
        </div>
      </div>
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
