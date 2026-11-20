import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PercentageCalculator } from './percentage-calculator';

const placeholder = '—';

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

  function setInputValue(
    label: 'Percentage' | 'Base value',
    value: string
  ): void {
    const input: HTMLInputElement | null =
      fixture.nativeElement.querySelector(`input[aria-label="${label}"]`);

    if (!input) {
      throw new Error(`Input "${label}" not found`);
    }

    input.value = value;
    input.dispatchEvent(new Event('input'));
  }

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

    expect(result.textContent.trim()).toBe(placeholder);
  });

  it('displays the result when both inputs are provided', () => {
    setInputValue('Percentage', '20');
    setInputValue('Base value', '150');

    fixture.detectChanges();

    const result: HTMLOutputElement | null =
      fixture.nativeElement.querySelector('output[aria-label="Result"]');

    expect(result!.textContent.trim()).toBe('30');
  });

  it('displays zero instead of the placeholder', () => {
    setInputValue('Percentage', '0');
    setInputValue('Base value', '150');

    fixture.detectChanges();

    const result: HTMLOutputElement | null =
      fixture.nativeElement.querySelector('output[aria-label="Result"]');

    expect(result!.textContent.trim()).toBe('0');
  });

  it('displays a placeholder when the calculation overflows', () => {
    setInputValue('Percentage', '1000');
    setInputValue('Base value', '1e308');

    fixture.detectChanges();

    const result: HTMLOutputElement | null =
      fixture.nativeElement.querySelector('output[aria-label="Result"]');

    expect(result!.textContent.trim()).toBe(placeholder);
  });

  
  it.for([
    { input: 'Percentage' },
    { input: 'Base value' },
  ] as const)(
    'displays a placeholder when $input is cleared',
    ({ input }) => {
      setInputValue('Percentage', '10');
      setInputValue('Base value', '50');

      fixture.detectChanges();

      const result: HTMLOutputElement | null =
        fixture.nativeElement.querySelector('output[aria-label="Result"]');

      expect(result!.textContent.trim()).toBe('5');

      setInputValue(input, '');

      fixture.detectChanges();

      expect(result!.textContent.trim()).toBe(placeholder);
    }
  );
});
