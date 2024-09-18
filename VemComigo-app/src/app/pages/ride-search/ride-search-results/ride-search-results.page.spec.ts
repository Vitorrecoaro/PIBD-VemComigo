import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RideSearchResultsPage } from './ride-search-results.page';

describe('RideSearchResultsPage', () => {
  let component: RideSearchResultsPage;
  let fixture: ComponentFixture<RideSearchResultsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RideSearchResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
