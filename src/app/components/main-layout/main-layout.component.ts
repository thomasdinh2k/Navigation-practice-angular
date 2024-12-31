import { Component, inject } from '@angular/core';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { DogService } from '../dog/services/dog.service';
import { DogBreedData } from '../dog/types/dog.types';
import { PageContentComponent } from "../page-content/page-content.component";
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
    PageContentComponent
],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  menuService: MenuService = inject(MenuService);
  dogBreeds : DogBreedData | null = null;
  constructor(
    private DogService: DogService,
  ) {}

  ngOnInit() {
    this.DogService.getDogBreeds().subscribe(
      res => console.log("breeds", res)
    )
  }

  

  navFolders = this.menuService.MenuFolder.map((item) => item.name);
  
  
}
