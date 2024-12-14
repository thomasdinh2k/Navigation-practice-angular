interface MenuData {
  title: string;
  items: string[];
}

interface Submenu {
  title: string;
  items: string[];
}

export interface MenuItem {
  title: string;
  icon: string | null; // Optional because not all menu items may have an icon
  groups?: MenuData[]; // Optional because not all menu items will have groups
  submenus?: Submenu[]; // Optional because not all menu items will have submenus
  items?: string[]; // Direct items in the menu
  onOpenChange?: (isOpen: boolean) => void; // Optional function to handle open state
}
