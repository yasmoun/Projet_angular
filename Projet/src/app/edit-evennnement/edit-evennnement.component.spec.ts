import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEvennnementComponent } from './edit-evennnement.component';

describe('EditEvennnementComponent', () => {
  let component: EditEvennnementComponent;
  let fixture: ComponentFixture<EditEvennnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEvennnementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEvennnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
