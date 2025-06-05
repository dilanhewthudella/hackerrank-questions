import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SideBarComponent } from '../../shared/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-portal',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, SideBarComponent, RouterModule],
  templateUrl: './main-portal.component.html',
  styleUrl: './main-portal.component.scss',
})
export class MainPortalComponent {}
