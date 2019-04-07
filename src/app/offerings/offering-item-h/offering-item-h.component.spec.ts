import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferingItemHComponent } from './offering-item-h.component';

describe('OfferingItemHComponent', () => {
  let component: OfferingItemHComponent;
  let fixture: ComponentFixture<OfferingItemHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferingItemHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferingItemHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
