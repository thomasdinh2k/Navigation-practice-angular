import { Component, inject } from '@angular/core';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { DogService } from '../dog/services/dog.service';
import { DogBreedData } from '../dog/types/dog.types';
import { PageContentComponent } from '../page-content/page-content.component';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './menu/menu.service';
import { Folder } from './menu/menu.type';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    NzBreadCrumbModule,
    NzIconModule,
    NzMenuModule,
    NzLayoutModule,
    MenuComponent,
    PageContentComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  menuService: MenuService = inject(MenuService);
  dogBreeds: Folder[] | null = null;
  constructor(private DogService: DogService) {}

  // Transform dog breeds to folder
  dataTransformer(data: DogBreedData) {
    const result: Folder[] = [];

    const handleEach = (data: any) => {
      console.log('value', data);
      let breedData: Folder = {
        name: data[0],
        folders: Array.isArray(data[1])
          ? data[1].map((item) => ({
              name: item,
            }))
          : undefined,
      };
      return breedData;
    };

    Object.entries(data).forEach((value) => {
      result.push(handleEach(value));
    });

    return result;
  }

  ngOnInit() {
    this.DogService.getDogBreeds().subscribe((res) => {
      this.dogBreeds = this.dataTransformer(res.message);
      console.log('Transformed', this.dogBreeds);
    });
  }

  navFolders = this.menuService.MenuFolder.map((item) => item.name);
}
