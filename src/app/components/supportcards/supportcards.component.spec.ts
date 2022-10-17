import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportcardsComponent } from './supportcards.component';

describe('SupportcardsComponent', () => {
  let component: SupportcardsComponent;
  let fixture: ComponentFixture<SupportcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
