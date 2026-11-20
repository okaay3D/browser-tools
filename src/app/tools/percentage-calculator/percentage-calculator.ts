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
    const percentageNumber = parseFiniteNumber(this.percentage());
    const baseValueNumber = parseFiniteNumber(this.baseValue());

    if (percentageNumber === null || baseValueNumber === null) {
      return null;
    }

    const calculatedResult = calculatePercentage({
      percentage: percentageNumber,
      baseValue: baseValueNumber,
    });

    return Number.isFinite(calculatedResult)
      ? calculatedResult
      : null;
  });
}

function parseFiniteNumber(value: string): number | null {
  if (value.trim() === '') {
    return null;
  }

  const number = Number(value);

  return Number.isFinite(number)
    ? number
    : null;
}