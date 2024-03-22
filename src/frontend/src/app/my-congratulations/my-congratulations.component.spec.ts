import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCongratulationsComponent } from './my-congratulations.component';

describe('MyCongratulationsComponent', () => {
  let component: MyCongratulationsComponent;
  let fixture: ComponentFixture<MyCongratulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCongratulationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCongratulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
