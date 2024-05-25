import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHomepageComponent } from './my-homepage.component';

describe('MyHomepageComponent', () => {
  let component: MyHomepageComponent;
  let fixture: ComponentFixture<MyHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
