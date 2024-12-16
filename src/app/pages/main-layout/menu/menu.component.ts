import { CommonModule, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FolderComponent } from './folder/folder.component';
import { MenuService } from './menu.service';
import type { Folder } from './menu.type';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NzMenuModule, NgFor, FolderComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  navFolders: Folder[] = [];
  menuService: MenuService = inject(MenuService);

  constructor() {
    this.navFolders = this.menuService.getAllNavsFolder();
  }

  change(value: boolean): void {
    console.log(value);
  }
}
