import {Component} from '@angular/core';
import {MenuItem} from './models/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-test';

  isSideMenuOpen = false;
  activeMenuItem: MenuItem;

  onToggleMenuEventHandler(event) {
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }

  onMenuChangedEventHandler(menuItem: MenuItem) {
    this.activeMenuItem = menuItem;
  }

}
