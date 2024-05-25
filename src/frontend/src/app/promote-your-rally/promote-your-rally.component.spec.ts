import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteYourRallyComponent } from './promote-your-rally.component';

describe('PromoteYourRallyComponent', () => {
  let component: PromoteYourRallyComponent;
  let fixture: ComponentFixture<PromoteYourRallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoteYourRallyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoteYourRallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
