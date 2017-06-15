import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'amountLeft',
  pure: false
})
export class AmountLeftPipe implements PipeTransform {

  transform(input: Project[], amountRemaining) {
    // var totalRequested = input[i].totalAmount
    var output: Project[] = [];
    if(amountRemaining === "Greater than 75") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].currentAmount/input[i].totalAmount >  .75) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
