import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsliderComponent } from './productslider.component';

describe('ProductsliderComponent', () => {
  let component: ProductsliderComponent;
  let fixture: ComponentFixture<ProductsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
