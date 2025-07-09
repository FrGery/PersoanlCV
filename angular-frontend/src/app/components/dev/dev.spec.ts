import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dev } from './dev';

describe('Dev', () => {
  let component: Dev;
  let fixture: ComponentFixture<Dev>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dev]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dev);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
