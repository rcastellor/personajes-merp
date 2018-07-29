import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'signedNumber'
})
export class SignedNumberPipe implements PipeTransform {

  transform(value: number): string {
    if (value > 0) {
      return '+' + value;
    }
    return String(value);
  }

}
