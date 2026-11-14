import { Component, computed, signal } from '@angular/core';
import { countCharacters, countWords } from './count-words';

@Component({
  imports: [],
  selector: 'app-word-counter',
  styleUrl: './word-counter.scss',
  templateUrl: './word-counter.html',
})
export class WordCounter {
  readonly text = signal('');

  readonly wordCount = computed(() => countWords(this.text()));
  
  readonly characterCount = computed(() => countCharacters(this.text()));
}
