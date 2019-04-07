import {MenuItem} from '../models/menu-item';

export const SideMenuConstants = {
  DASHBOARD: 'dashboard',
  OFFERINGS: 'offerings',
  TRANSACTIONS: 'transactions',
  SETTINGS: 'settings',
  VALUE: 'value'
};

export const SideMenuItemArr: MenuItem[] = [
  {id: SideMenuConstants.DASHBOARD, label: 'Dashboard', icon: 'fa-gavel'},
  {id: SideMenuConstants.OFFERINGS, label: 'offerings', icon: 'fa-exchange-alt'},
  {id: SideMenuConstants.TRANSACTIONS, label: 'transactions', icon: 'fa-users'},
  {id: SideMenuConstants.SETTINGS, label: 'settings', icon: 'fa-cogs'},
  {id: SideMenuConstants.VALUE, label: 'value', icon: 'fa-gavel'},
];

