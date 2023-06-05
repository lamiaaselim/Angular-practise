import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountedProductsComponentComponent } from './discounted-products-component.component';

describe('DiscountedProductsComponentComponent', () => {
  let component: DiscountedProductsComponentComponent;
  let fixture: ComponentFixture<DiscountedProductsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscountedProductsComponentComponent]
    });
    fixture = TestBed.createComponent(DiscountedProductsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
