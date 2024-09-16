import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RideHistoryPage } from './ride-history.page';

describe('RideHistoryPage', () => {
  let component: RideHistoryPage;
  let fixture: ComponentFixture<RideHistoryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RideHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
