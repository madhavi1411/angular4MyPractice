import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: any, exponent: number = 1): number {

    return Math.pow(value, exponent);
  }

}
