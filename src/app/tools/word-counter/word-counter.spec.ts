import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WordCounter } from './word-counter';

describe('WordCounter', () => {
  let component: WordCounter;
  let fixture: ComponentFixture<WordCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordCounter],
    }).compileComponents();

    fixture = TestBed.createComponent(WordCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('displays zero words before any text is entered', () => {
    const wordCount: HTMLOutputElement | null = 
      fixture.nativeElement.querySelector('output[aria-label="Words"]');

    expect(wordCount).not.toBeNull();
    expect(wordCount?.textContent?.trim()).toBe('0');
  });

  it('updates the word count when text is entered', () => {
    const textarea: HTMLTextAreaElement = getTextarea();

    enterText('Hello world', textarea);

    const wordCount: HTMLOutputElement | null =
      fixture.nativeElement.querySelector('output[aria-label="Words"]');

    expect(wordCount?.textContent?.trim()).toBe('2');
  });

  it('displays zero characters before any text is entered', () => {
    const characterCount: HTMLOutputElement | null = 
      fixture.nativeElement.querySelector('output[aria-label="Characters"]');

    expect(characterCount).not.toBeNull();
    expect(characterCount?.textContent?.trim()).toBe('0');
  });

  it('updates the character count when text is entered', () => {
    const textarea: HTMLTextAreaElement = getTextarea();

    enterText('Hello world', textarea);

    const characterCount: HTMLOutputElement | null =
      fixture.nativeElement.querySelector('output[aria-label="Characters"]');

    expect(characterCount?.textContent?.trim()).toBe('11');
  });

  function getTextarea(): HTMLTextAreaElement {
    const textarea: HTMLTextAreaElement | null = 
      fixture.nativeElement.querySelector('textarea[aria-label="Text"]')

      if (!textarea) {
        throw Error('Textarea not found');
      }

      return textarea;
  }

  function enterText(text: string, textarea: HTMLTextAreaElement): void {
    textarea.value = text;
    textarea.dispatchEvent(new Event('input'));

    fixture.detectChanges();
  }
});
