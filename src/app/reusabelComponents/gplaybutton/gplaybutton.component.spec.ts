import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GplaybuttonComponent } from './gplaybutton.component';

describe('GplaybuttonComponent', () => {
  let component: GplaybuttonComponent;
  let fixture: ComponentFixture<GplaybuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GplaybuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GplaybuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
