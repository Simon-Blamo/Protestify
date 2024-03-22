import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAboutComponent } from './my-about.component';

describe('MyAboutComponent', () => {
  let component: MyAboutComponent;
  let fixture: ComponentFixture<MyAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
