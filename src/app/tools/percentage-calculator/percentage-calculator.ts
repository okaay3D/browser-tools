import { Component, computed, signal } from '@angular/core';
import { calculatePercentage } from './calculate-percentage';

@Component({
  imports: [],
  selector: 'app-percentage-calculator',
  styleUrl: './percentage-calculator.scss',
  templateUrl: './percentage-calculator.html',
})
export class PercentageCalculator {
  readonly percentage = signal('');

  readonly baseValue = signal('');

  readonly result = computed(() => {
    if (/\d+/.test(this.percentage()) && /\d+/.test(this.baseValue())) {
      return calculatePercentage({
        percentage: Number(this.percentage()),
        baseValue: Number(this.baseValue()),
      });
    }

    return null;
  });
}
