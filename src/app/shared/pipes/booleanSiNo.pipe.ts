import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanSiNo'
})
export class BooleanSiNoPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    return value? "Si" : "No";
  }

}
