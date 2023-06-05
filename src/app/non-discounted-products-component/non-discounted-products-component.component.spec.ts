import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonDiscountedProductsComponentComponent } from './non-discounted-products-component.component';

describe('NonDiscountedProductsComponentComponent', () => {
  let component: NonDiscountedProductsComponentComponent;
  let fixture: ComponentFixture<NonDiscountedProductsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonDiscountedProductsComponentComponent]
    });
    fixture = TestBed.createComponent(NonDiscountedProductsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
