import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRalliesComponent } from './my-rallies.component';

describe('MyRalliesComponent', () => {
  let component: MyRalliesComponent;
  let fixture: ComponentFixture<MyRalliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRalliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRalliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
