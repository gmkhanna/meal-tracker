import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { FormsModule } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <div class="new-meal">
  <div class="form-group newName">
  <input #newName placeholder="Name">
  </div>
  <div class="form-group newCalories">
  <input #newCalories placeholder="Calories">
  </div>
  <div class="form-group newDetails">
  <input #newDetails placeholder="Details">
  </div>
  <h2 class="add-meal">Add a New Meal</h2>
  <button class="btn"
  (click)="submitInfo(newName.value, newCalories.value, newDetails.value); newName.value=''; newCalories.value=''; newDetails.value='';">
  Log Meal</button>
</div>
  `
})

export class NewMealComponent {
  @Output() infoSender = new EventEmitter();

submitInfo(name: string, calories: number, details: string) {
  var newMealtoLog: Meal = new Meal(name, calories, details);
  this.infoSender.emit(newMealtoLog)
}

}
