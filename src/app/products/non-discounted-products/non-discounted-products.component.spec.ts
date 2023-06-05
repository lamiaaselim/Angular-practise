import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonDiscountedProductsComponent } from './non-discounted-products.component';

describe('NonDiscountedProductsComponent', () => {
  let component: NonDiscountedProductsComponent;
  let fixture: ComponentFixture<NonDiscountedProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonDiscountedProductsComponent]
    });
    fixture = TestBed.createComponent(NonDiscountedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
