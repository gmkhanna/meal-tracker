import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { FormsModule } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <h3>Add a New Meal</h3>
  <div class="form-group">
    <label>Name</label>
    <input #newName>
  </div>
  <div class="form-group">
    <label>Calories</label>
    <input #newCalories>
  </div>
  <div class="form-group">
    <label>Details</label>
    <input #newDetails>
  </div>
  <button class="btn" (click)="submitInfo(newName.value, newCalories.value, newDetails.value); newName.value=''; newCalories.value=''; newDetails.value='';">Log Meal</button>
  `
})

export class NewMealComponent {
  @Output() infoSender = new EventEmitter();

submitInfo(name: string, calories: number, details: string) {
  var newMealtoLog: Meal = new Meal(name, calories, details);
  this.infoSender.emit(newMealtoLog)
}

}
