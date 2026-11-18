import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PercentageCalculator } from './percentage-calculator';

describe('PercentageCalculator', () => {
  let component: PercentageCalculator;
  let fixture: ComponentFixture<PercentageCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercentageCalculator],
    }).compileComponents();

    fixture = TestBed.createComponent(PercentageCalculator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders inputs for percentage and base value', () => {
    const percentageInput: HTMLInputElement | null =
      fixture.nativeElement.querySelector('input[aria-label="Percentage"]');

    const baseValueInput: HTMLInputElement | null =
      fixture.nativeElement.querySelector('input[aria-label="Base value"]');

    expect(percentageInput).not.toBeNull();
    expect(baseValueInput).not.toBeNull();
  });

  it('displays a placeholder result initially', () => {
    const result: HTMLOutputElement | null =
      fixture.nativeElement.querySelector('output[aria-label="Result"]');

    if (!result) {
      throw Error('Result element not found');
    }

    expect(result.textContent.trim()).toBe('—');
  });

  it('displays the result when both inputs are provided', () => {
    const percentageInput: HTMLInputElement | null =
      fixture.nativeElement.querySelector('input[aria-label="Percentage"]');

    const baseValueInput: HTMLInputElement | null =
      fixture.nativeElement.querySelector('input[aria-label="Base value"]');

    const result: HTMLOutputElement | null =
      fixture.nativeElement.querySelector('output[aria-label="Result"]');

    percentageInput!.value = '20';
    percentageInput!.dispatchEvent(new Event('input'));

    baseValueInput!.value = '150';
    baseValueInput!.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(result!.textContent.trim()).toBe('30');
  });

  it('displays zero instead of the placeholder', () => {
    const percentageInput: HTMLInputElement | null =
      fixture.nativeElement.querySelector('input[aria-label="Percentage"]');

    const baseValueInput: HTMLInputElement | null =
      fixture.nativeElement.querySelector('input[aria-label="Base value"]');

    const result: HTMLOutputElement | null =
      fixture.nativeElement.querySelector('output[aria-label="Result"]');

    percentageInput!.value = '0';
    percentageInput!.dispatchEvent(new Event('input'));

    baseValueInput!.value = '150';
    baseValueInput!.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(result!.textContent.trim()).toBe('0');
  });
});
