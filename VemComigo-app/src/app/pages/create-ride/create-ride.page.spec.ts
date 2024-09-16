import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateRidePage } from './create-ride.page';

describe('CreateRidePage', () => {
  let component: CreateRidePage;
  let fixture: ComponentFixture<CreateRidePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
