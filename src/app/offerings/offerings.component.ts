import {Component, OnInit} from '@angular/core';
import {AppService} from '../services/app.service';
import {Offering} from '../models/offering';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.scss']
})
export class OfferingsComponent implements OnInit {

  offerings: Offering[] = [];
  mainOffer: Offering;
  showMainOffer = true;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.getOfferings();
    window.addEventListener('resize', () => {
      this.updateMainOfferViewFlag();
    });
    this.updateMainOfferViewFlag();
  }

  updateMainOfferViewFlag() {
    this.showMainOffer = window.innerWidth >= 960;
  }

  getOfferings() {
    this.appService.retrieveOfferings()
      .subscribe(result => {
        this.offerings = result ? result.offerings : [];
        this.offerings = [...this.offerings, ...this.offerings, ...this.offerings, ...this.offerings];
        this.mainOffer = this.offerings.splice(0, 1)[0];
        console.log('Offertings => ', result);
      }, error => {
        console.log('Http error => ', error);
      });
  }

}
