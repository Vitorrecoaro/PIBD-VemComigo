import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriarCaronaPage } from './criar-carona.page';

describe('CriarCaronaPage', () => {
  let component: CriarCaronaPage;
  let fixture: ComponentFixture<CriarCaronaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarCaronaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
