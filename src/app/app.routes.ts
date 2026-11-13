import { Routes } from '@angular/router';
import { TOOLS } from './tools/tool-registry';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./home/home').then(m => m.Home),
    },
    ...TOOLS.map(tool => ({
        path: `tools/${tool.slug}`,
        loadComponent: tool.loadComponent,
    })),
    {
        path: '**',
        redirectTo: '',
    },
];
