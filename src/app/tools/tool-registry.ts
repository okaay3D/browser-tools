
import type { Route } from '@angular/router';

export interface ToolDefinition {
    slug: string;
    title: string;
    description: string;
    category: string;
    loadComponent: NonNullable<Route['loadComponent']>;
}

export const TOOLS: ToolDefinition[] = [
    {
        slug: 'word-counter',
        title: 'Word Counter',
        description: 'Count words and characters in your text.',
        category: 'text',
        loadComponent: () =>
            import('./word-counter/word-counter').then(m => m.WordCounter),
    },
    {
        slug: 'percentage-calculator',
        title: 'Percentage Calculator',
        description: 'Calculate percentages, percentage changes, and percentage differences.',
        category: 'math',
        loadComponent: () =>
            import('./percentage-calculator/percentage-calculator').then(m => m.PercentageCalculator),
    },
];
