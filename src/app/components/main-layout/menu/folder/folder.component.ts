import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { Folder } from '../menu.type';

@Component({
  selector: 'app-folder',
  imports: [NzMenuModule, NgFor, NgIf, RouterLink],
  standalone: true,
  template: `
    <!-- Render Submenu if Subfolders Exist -->
    <li
      *ngIf="folder.folders && folder.folders.length > 1"
      nz-submenu
      [nzTitle]="folder.name"
      [nzIcon]="'folder'"
      [routerLink]="folder.name"
    >
      <ul>
        <ng-container *ngFor="let subfolder of folder.folders">
          <!-- Recursively Check Subfolders -->
          <ng-container *ngIf="subfolder?.folders; else menuItem">
            <!-- <li nz-submenu [nzTitle]="subfolder.name" [nzIcon]="'folder'">
              <ul>
                <li *ngFor="let subsubfolder of subfolder.folders" nz-menu-item>
                  {{ subsubfolder.name }}
                </li>
              </ul>
            </li> -->
            <!--  -->
            <!--  -->
            <!-- The code above is the exact content of the <Folder/>, which is a recursive component -->
            <app-folder
              [folder]="subfolder"
              [ParentPath]="accumulatePath(ParentPath, folder.name)"
            ></app-folder>
          </ng-container>

          <!-- Render Simple Menu Item Because SubFolder Does't Have More SubFolders -->
          <ng-template #menuItem>
            <li nz-menu-item [routerLink]="subfolder.name">
              {{ subfolder.name }}
            </li>
          </ng-template>
        </ng-container>
      </ul>
    </li>

    <!-- Render Simple Menu Item if No Subfolders Exist -->
    <li *ngIf="folder.folders.length < 1" nz-menu-item [routerLink]="folder.name">
      {{ folder.name }}
    </li>
  `,
  styles: ``,
})
export class FolderComponent {
  @Input() folder!: Folder;
  @Input() ParentPath: string = '';

  accumulatePath(parentPath: string, currentPath: string): string {
    return parentPath ? `${parentPath}/${currentPath}` : currentPath;
  }
}
