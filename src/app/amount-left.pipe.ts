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
    if (amountRemaining === "Fully Funded") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].currentAmount === input[i].totalAmount) {
          output.push(input[i]);
        }
      }
    return output;
    } else if(amountRemaining === "Greater than 75") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].currentAmount/input[i].totalAmount >  .75 && input[i].currentAmount/input[i].totalAmount  < 1) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(amountRemaining === "50 to 75") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].currentAmount/input[i].totalAmount >  .50 && input[i].currentAmount/input[i].totalAmount  < .75) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(amountRemaining === "25 to 50") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].currentAmount/input[i].totalAmount >  .25 && input[i].currentAmount/input[i].totalAmount  < .50) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(amountRemaining === "0 to 25") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].currentAmount/input[i].totalAmount <=  .25) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
