import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAdminStatsComponent } from './my-admin-stats.component';

describe('MyAdminStatsComponent', () => {
  let component: MyAdminStatsComponent;
  let fixture: ComponentFixture<MyAdminStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAdminStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAdminStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
