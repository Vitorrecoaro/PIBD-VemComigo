import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MinhasCaronasPage } from './minhas-caronas.page';

describe('MinhasCaronasPage', () => {
  let component: MinhasCaronasPage;
  let fixture: ComponentFixture<MinhasCaronasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasCaronasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
