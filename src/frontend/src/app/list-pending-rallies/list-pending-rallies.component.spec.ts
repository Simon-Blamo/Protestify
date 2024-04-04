import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPendingRalliesComponent } from './list-pending-rallies.component';

describe('ListPendingRalliesComponent', () => {
  let component: ListPendingRalliesComponent;
  let fixture: ComponentFixture<ListPendingRalliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPendingRalliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPendingRalliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
