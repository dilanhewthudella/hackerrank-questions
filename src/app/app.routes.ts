import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'panel' },
  {
    path: 'panel',
    //canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/views/main-portal/main-portal.module').then(
        (m) => m.MainPortalModule
      ),
  },
];
