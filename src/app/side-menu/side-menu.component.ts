import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuItem} from '../models/menu-item';
import {SideMenuItemArr} from '../constants/app.constants';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input() toggleMenu: boolean;
  menuItems: MenuItem[] = SideMenuItemArr;
  activeMenu: MenuItem;
  @Output() menuChanged: EventEmitter<MenuItem> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.onMenuItemClick(this.menuItems[1]);
  }

  onMenuItemClick(menu: MenuItem) {
    this.activeMenu = menu;
    this.menuChanged.emit(this.activeMenu);
  }

}
