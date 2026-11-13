
import type { Route } from '@angular/router';

export interface ToolDefinition {
    slug: string;
    title: string;
    description: string;
    category: string;
    loadComponent: NonNullable<Route['loadComponent']>;
}

export const TOOLS: ToolDefinition[] = [
    // {
    //     slug: 'percentage-calculator',
    //     title: 'Prozentrechner',
    //     description: 'Berechne Prozentwerte.',
    //     category: 'math',
    //     loadComponent: () =>
    //         import('./percentage-calculator/percentage-calculator')
    //             .then(m => m.PercentageCalculator),
    // },
];
