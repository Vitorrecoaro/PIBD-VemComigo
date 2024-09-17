import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RideAcceptedPage } from './ride-accepted.page';

describe('RideAcceptedPage', () => {
  let component: RideAcceptedPage;
  let fixture: ComponentFixture<RideAcceptedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RideAcceptedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
