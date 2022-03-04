import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCartComponent } from './full-cart.component';

describe('FullCartComponent', () => {
  let component: FullCartComponent;
  let fixture: ComponentFixture<FullCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
