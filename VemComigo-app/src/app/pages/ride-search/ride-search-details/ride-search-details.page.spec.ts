import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RideSearchDetailsPage } from './ride-search-details.page';

describe('RideSearchDetailsPage', () => {
  let component: RideSearchDetailsPage;
  let fixture: ComponentFixture<RideSearchDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RideSearchDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
