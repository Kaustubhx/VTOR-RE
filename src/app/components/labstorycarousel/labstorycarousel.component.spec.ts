import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabstorycarouselComponent } from './labstorycarousel.component';

describe('LabstorycarouselComponent', () => {
  let component: LabstorycarouselComponent;
  let fixture: ComponentFixture<LabstorycarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabstorycarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabstorycarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
