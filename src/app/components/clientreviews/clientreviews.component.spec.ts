import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientreviewsComponent } from './clientreviews.component';

describe('ClientreviewsComponent', () => {
  let component: ClientreviewsComponent;
  let fixture: ComponentFixture<ClientreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientreviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
