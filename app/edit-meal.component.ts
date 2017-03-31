import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div class="row edit-meal" *ngIf="childSelectedMeal">
  <div class="col-sm-6">
  <h4>Edit Meal</h4>

  <div class="form-group">
  <label>Name</label>
  <input [(ngModel)]="childSelectedMeal.name">
  </div>

  <div class="form-group">
  <label>Calories</label>
  <input [(ngModel)]="childSelectedMeal.calories">
  </div>

  <div class="form-group">
  <label>Details</label>
  <input [(ngModel)]="childSelectedMeal.details">
  </div>
  <button (click)="doneEditing()">Submit</button>
  </div>
  </div>
  `

})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() hideEditForm = new EventEmitter();

  doneEditing() {
    this.hideEditForm.emit();
  }

}
