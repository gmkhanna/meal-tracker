import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'total-calories',
  template: `
    <h3></h3>
  `

})


export class TotalCaloriesComponent {

  totalCalories(input: Meal[]) {
    var total = 0;
    console.log(input.length);
     for (var i = 0; i < input.length; i++) {
       total += input[i].calories;
     }
     console.log(total)
     return total;
  }


}
