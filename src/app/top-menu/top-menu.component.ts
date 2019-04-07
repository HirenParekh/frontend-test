import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuItem} from '../models/menu-item';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  @Output() toggleMenu: EventEmitter<boolean> = new EventEmitter();
  @Input() activeMenu: MenuItem;

  constructor() {
  }

  ngOnInit() {
  }

  toggleSideMenu() {
    this.toggleMenu.emit(true);
  }

}
