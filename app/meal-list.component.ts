import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-list',
  template: `
    <div>
      <h2>Logged Meals for the Day</h2>

      <select (change)="onChange($event.target.value)">
        <option value="all">Complete Log</option>
        <option value="healthy">Healthy Choices</option>
        <option value="unhealthy">Unhealthy Choices</option>
      </select>
      <br>

      <div class="meal row">
        <div class="col-sm-3 list-div" *ngFor="let currentMeal of childMealList | healthiness:filterByHealth">
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

  filterByHealth: string = "healthy"

  clickedEditButton(editingMeal: Meal) {
    this.editEvent.emit(editingMeal);
  }

  onChange(viewOption) {
    this.filterByHealth = viewOption;
  }

}
