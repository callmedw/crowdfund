import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'type',
  pure: false
})
export class TypePipe implements PipeTransform {

  transform(input: Project[], desiredType) {
    var output: Project[] = [];
    if(desiredType === "Technology") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "Technology") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType === "Health and Wellness") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "Health and Wellness") {
          output.push(input[i]);
        }
      }
      return output;

    } else if (desiredType === "Non-Profit") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "Non-profit") {
          output.push(input[i]);
        }
      }
      return output;

    } else if (desiredType === "Entertainment") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "Entertainment") {
          output.push(input[i]);
        }
      }
      return output;

    } else if (desiredType === "Education") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].type === "Education") {
            output.push(input[i]);
          }
        }
      return output;
    } else {
      return input;
    }
  }

}
