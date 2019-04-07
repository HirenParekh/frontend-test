import {Component, OnInit} from '@angular/core';
import {OfferingItemComponent} from '../offering-item/offering-item.component';

@Component({
  selector: 'app-offering-item-h',
  templateUrl: './offering-item-h.component.html',
  styleUrls: ['./offering-item-h.component.scss']
})
export class OfferingItemHComponent extends OfferingItemComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
