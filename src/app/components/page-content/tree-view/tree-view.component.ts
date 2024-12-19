import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  NzTreeFlatDataSource,
  NzTreeFlattener,
  NzTreeViewModule,
} from 'ng-zorro-antd/tree-view';

interface TreeNode {
  name: string;
  disabled?: boolean;
  children?: TreeNode[];
}

const TREE_DATA: TreeNode[] = [
  {
    name: 'parent 1',
    children: [
      {
        name: 'parent 1-0',
        // disabled: true,
        children: [
          { name: 'leaf 1' },
          { name: 'leaf 2' },
          { name: 'leaf 3', children: [{ name: 'leaf 3-1' }] },
        ],
      },
      {
        name: 'parent 1-1',
        children: [{ name: 'leaf' }],
      },
      {
        name: 'parent 1-2',
        children: [{ name: 'not a leaf', disabled: true }],
      },
      {
        name: 'not a parent',
        disabled: true,
        children: [{ name: 'not a leaf either', disabled: true }],
      },
    ],
  },
];

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
  disabled: boolean;
}

@Component({
  selector: 'app-tree-view',
  standalone: true,
  imports: [NzIconModule, NzTreeViewModule],
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.scss',
})
export class TreeViewComponent {
  private transformer = (node: TreeNode, level: number): FlatNode => ({
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    level,
    disabled: !!node.disabled,
  });
  selectListSelection = new SelectionModel<FlatNode>(false);

  treeControl = new FlatTreeControl<FlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new NzTreeFlattener(
    this.transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new NzTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.setData(TREE_DATA);
    this.treeControl.expandAll();
  }

  hasChild = (_: number, node: FlatNode): boolean => node.expandable;
}
