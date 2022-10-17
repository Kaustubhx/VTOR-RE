import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSupportcardComponent } from './single-supportcard.component';

describe('SingleSupportcardComponent', () => {
  let component: SingleSupportcardComponent;
  let fixture: ComponentFixture<SingleSupportcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSupportcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleSupportcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
