import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesSectionComponent } from './employees-section.component';

describe('EmployeesSectionComponent', () => {
  let component: EmployeesSectionComponent;
  let fixture: ComponentFixture<EmployeesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
