import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MenuService } from '../../main-layout/menu/menu.service';

@Component({
  selector: 'app-service-practice',
  imports: [CommonModule],
  template: `<button (click)="onDeleteAllNav()">Delete all Navs</button>`,
  styleUrl: './service-practice.component.scss',
})
export class ServicePracticeComponent {
  menuService: MenuService = inject(MenuService);

  onDeleteAllNav(): void {
    this.menuService.removeAllNavs();
  }
  constructor() {}
}
