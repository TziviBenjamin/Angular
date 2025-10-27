import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4 } from './comp4';

describe('Comp4', () => {
  let component: Comp4;
  let fixture: ComponentFixture<Comp4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comp4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comp4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
