import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvennementFormComponent } from './evennement-form.component';

describe('EvennementFormComponent', () => {
  let component: EvennementFormComponent;
  let fixture: ComponentFixture<EvennementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvennementFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvennementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
