import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import type { MenuItem } from './menu.type';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NzMenuModule, NgFor],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuData: MenuItem[] = [
    {
      title: 'Navigation One',
      icon: 'mail',
      groups: [
        {
          title: 'Item 1',
          items: ['Option 1', 'Option 2'],
        },
        {
          title: 'Item 2',
          items: ['Option 3', 'Option 4'],
        },
      ],
      submenus: [],
      onOpenChange: (isOpen: boolean) => {
        console.log('Navigation One submenu open state:', isOpen);
      },
    },
    {
      title: 'Navigation Two',
      icon: 'appstore',
      groups: [],
      submenus: [
        {
          title: 'Submenu',
          items: ['Option 7', 'Option 8'],
        },
      ],
      items: ['Option 5', 'Option 6'],
      onOpenChange: (isOpen: boolean) => {
        console.log('Navigation Two submenu open state:', isOpen);
      },
    },
    {
      title: 'Navigation Three',
      icon: 'setting',
      groups: [],
      submenus: [],
      items: ['Option 9', 'Option 10', 'Option 11'],
    },
  ];

  change(value: boolean): void {
    console.log(value);
  }
}