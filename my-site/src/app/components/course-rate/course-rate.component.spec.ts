import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRateComponent } from './course-rate.component';

describe('CourseRateComponent', () => {
  let component: CourseRateComponent;
  let fixture: ComponentFixture<CourseRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
