import { Component, inject } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './menu/menu.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    NzBreadCrumbModule,
    NzIconModule,
    NzMenuModule,
    NzLayoutModule,
    MenuComponent,
    RouterOutlet,
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  navFolders: string[] = [];

  menuService: MenuService = inject(MenuService);

  constructor() {
    // this.navFolders = this.menuService.getAllMenu();
  }
}
