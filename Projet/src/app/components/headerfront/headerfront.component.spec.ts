import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderfrontComponent } from './headerfront.component';

describe('HeaderfrontComponent', () => {
  let component: HeaderfrontComponent;
  let fixture: ComponentFixture<HeaderfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderfrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
