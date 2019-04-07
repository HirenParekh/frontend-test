import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OfferingsComponent } from './offerings/offerings.component';
import {HttpClientModule} from '@angular/common/http';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { OfferingItemComponent } from './offerings/offering-item/offering-item.component';
import { OfferingItemHComponent } from './offerings/offering-item-h/offering-item-h.component';

@NgModule({
  declarations: [
    AppComponent,
    OfferingsComponent,
    TopMenuComponent,
    SideMenuComponent,
    OfferingItemComponent,
    OfferingItemHComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
