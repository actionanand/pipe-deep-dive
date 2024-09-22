import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

import { TempPipe } from './shared/pipes/temp.pipe';
import { TempOddEvenPipe } from './shared/pipes/temp-odd-even.pipe';
import { SortPipe } from './shared/pipes/sort.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe, TempPipe, TempOddEvenPipe, SortPipe],
  templateUrl: './app.component.html',
})
export class AppComponent {
  currentDate = new Date();
  currentTemperaturs = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5];

  onReset(index: number) {
    // sort Pipe won't run with 'pure'
    this.historicTemperatures[index] = 18;

    // Sort Pipe will run
    /*
    const temp = [...this.historicTemperatures];
    temp[index] = 18;
    this.historicTemperatures = temp;
    */
  }
}
