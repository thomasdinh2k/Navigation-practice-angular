import { Component, Input } from '@angular/core';
import { Folder } from '../menu.type';

@Component({
  selector: 'app-folder',
  imports: [],
  template: ` <p>folder works!</p> `,
  styles: ``,
})
export class FolderComponent {
  @Input() folder!: Folder[];
}
