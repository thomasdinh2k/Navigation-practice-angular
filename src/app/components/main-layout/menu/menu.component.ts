import { CommonModule, NgFor } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FolderComponent } from './folder/folder.component';
import { MenuService } from './menu.service';
import { Folder } from './menu.type';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NzMenuModule, NgFor, FolderComponent, CommonModule],
  // templateUrl: './menu.component.html',
  template: `
    <ul
      nz-menu
      [nzMode]="'vertical'"
      *ngFor="let folder of dogBreedData"
    >
      <app-folder [folder]="folder"></app-folder>
    </ul>
  `,
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input({required: true}) dogBreedData: Folder[] | null = null;
  
  menuService: MenuService = inject(MenuService);

  constructor() {}

  change(value: boolean): void {
    console.log(value);
  }
}
