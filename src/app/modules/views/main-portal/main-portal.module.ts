import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPortalRoutingModule } from './main-portal-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainPortalRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class MainPortalModule {}
