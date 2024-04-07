import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGetStartedComponent } from './my-get-started.component';

describe('MyGetStartedComponent', () => {
  let component: MyGetStartedComponent;
  let fixture: ComponentFixture<MyGetStartedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGetStartedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
