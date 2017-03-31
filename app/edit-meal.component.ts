import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <!-- modal here -->
  <div id="edit-modal" class="modal fade" role="dialog">
    <div class="modal-dialog">
  <!-- edit form content -->
          <div class="modal-content" *ngIf="childSelectedMeal">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Edit Meal</h4>

              <div class="modal-body">

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
          </div>
          <!-- end form content -->
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
