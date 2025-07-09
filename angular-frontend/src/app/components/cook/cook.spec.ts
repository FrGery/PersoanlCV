import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cook } from './cook';

describe('Cook', () => {
  let component: Cook;
  let fixture: ComponentFixture<Cook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cook);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
