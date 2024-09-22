import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempOddEven',
  standalone: true,
})
export class TempOddEvenPipe implements PipeTransform {
  transform(value: string | number, isOdd: boolean): string {
    let val: number;
    let outputTemp: number;
    let symbol: '°F' | '°C';

    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    if (isOdd) {
      outputTemp = val * (9 / 5) + 32;
      symbol = '°F';
    } else {
      outputTemp = (val - 32) * (5 / 9);
      symbol = '°C';
    }

    return `${outputTemp.toFixed(2)} ${symbol}`;
  }
}
