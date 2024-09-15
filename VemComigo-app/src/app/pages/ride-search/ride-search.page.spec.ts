import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RideSearchPage } from './ride-search.page';

describe('RideSearchPage', () => {
  let component: RideSearchPage;
  let fixture: ComponentFixture<RideSearchPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RideSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
