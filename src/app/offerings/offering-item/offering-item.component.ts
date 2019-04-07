import {Component, Input, OnInit} from '@angular/core';
import {Offering} from '../../models/offering';

@Component({
  selector: 'app-offering-item',
  templateUrl: './offering-item.component.html',
  styleUrls: ['./offering-item.component.scss']
})
export class OfferingItemComponent implements OnInit {

  @Input() offer: Offering;

  constructor() {
  }

  ngOnInit() {
  }

}
