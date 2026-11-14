export function countWords(text: string): number {
    const trimmedText = text.trim();

    if (trimmedText.length === 0) {
        return 0;
    }

    return trimmedText
        .split(/\s+/)
        .filter((part: string) => /[\p{L}\p{N}]/u.test(part)) // \p{L} = unicode letter, \p{N} = unicode number
        .length;
}

export function countCharacters(text: string): number {
    const segmenter = new Intl.Segmenter(undefined, {
        granularity: 'grapheme',
    });
    return Array.from(segmenter.segment(text)).length;
}