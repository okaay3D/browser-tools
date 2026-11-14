import { countCharacters, countWords } from './count-words';

describe('countWords', () => {
    it('counts words separated by spaces', () => {
        const text = 'Hello world';

        const result = countWords(text);

        expect(result).toBe(2);
    });

    it('returns 0 for an empty string', () => {
        const text = '';

        const result = countWords(text);

        expect(result).toBe(0);
    });

    it('counts words separated by multiple spaces', () => {
        const text = 'Hello   world';

        const result = countWords(text);

        expect(result).toBe(2);
    });

    it('ignores leading and trailing whitespace when counting words', () => {
        const text = '   Hello world    ';

        const result = countWords(text);

        expect(result).toBe(2);
    });

    it('returns zero for whitespace-only texts', () => {
        const text = '     ';

        const result = countWords(text);

        expect(result).toBe(0);
    });

    it('counts words separated by a line break', () => {
        const text = 'hello\nworld';

        const result = countWords(text);

        expect(result).toBe(2);
    });

    it('ignores consecutive line breaks when counting words', () => {
        const text = 'hello\n\nworld';

        const result = countWords(text);

        expect(result).toBe(2);
    });

    it('counts words separated by a tab character', () => {
        const text = 'hello\tworld';

        const result = countWords(text);

        expect(result).toBe(2);
    });

    it('counts words separated by mixed whitespace characters', () => {
        const text = 'hello \t world';

        const result = countWords(text);

        expect(result).toBe(2);
    });

    it('counts numbers as words', () => {
        const text = '123 456';

        const result = countWords(text);

        expect(result).toBe(2);
    });

    it('counts hyphenated words as a single word', () => {
        const text = 'well-known';

        const result = countWords(text);

        expect(result).toBe(1);
    });

    it('counts contractions as single words', () => {
        const text = 'I don\'t know';

        const result = countWords(text);

        expect(result).toBe(3);
    });

    it('does not count punctuation-only text as a word', () => {
        const text = '???';

        const result = countWords(text);

        expect(result).toBe(0);
    });

    it('counts words containing non-Latin characters', () => {
        const text = '你好 世界';

        const result = countWords(text);

        expect(result).toBe(2);
    });
});

describe('countCharacters', () => {
    it('counts characters including spaces', () => {
        const text = 'Hello world';

        const result = countCharacters(text);

        expect(result).toBe(11);
    });

    it('counts an emoji as single character', () => {
        const text = '😎';

        const result = countCharacters(text);

        expect(result).toBe(1);
    });

    it('counts an emoji with a skin tone modifier as a single character', () => {
        const text = '👍🏽';

        const result = countCharacters(text);

        expect(result).toBe(1);
    });

    it('counts emojis made of multiple code points as a single character', () => {
        const text = '👨‍👩‍👧‍👦';

        const result = countCharacters(text);

        expect(result).toBe(1);
    });

    it('returns zero for empty text', () => {
        const text = '';

        const result = countCharacters(text);

        expect(result).toBe(0);
    });
});