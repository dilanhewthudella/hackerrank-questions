import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPortalComponent } from './main-portal.component';
import { Question1CelsiusToFahranheitComponent } from './question-1-celsius-to-fahranheit/question-1-celsius-to-fahranheit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Question2Component } from './question-2/question-2.component';

const routes: Routes = [
  {
    path: '',
    component: MainPortalComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'question-1',
        component: Question1CelsiusToFahranheitComponent,
      },
      {
        path: 'question-2',
        component: Question2Component,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPortalRoutingModule {}
