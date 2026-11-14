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
    const textarea: HTMLTextAreaElement | null = 
      fixture.nativeElement.querySelector('textarea[aria-label="Text"]');

    expect(textarea).not.toBeNull();

    if (!textarea) {
      throw Error('Textarea not found');
    }

    textarea.value = 'Hello world';
    textarea.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const wordCount: HTMLOutputElement | null =
      fixture.nativeElement.querySelector('output[aria-label="Words"]');

    expect(wordCount?.textContent?.trim()).toBe('2');
  });
});
