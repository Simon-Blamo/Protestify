import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRallyMapComponent } from './my-rally-map.component';

describe('MyRallyMapComponent', () => {
  let component: MyRallyMapComponent;
  let fixture: ComponentFixture<MyRallyMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRallyMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRallyMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
