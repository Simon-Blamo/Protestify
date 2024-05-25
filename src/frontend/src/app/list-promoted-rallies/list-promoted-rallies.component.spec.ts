import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPromotedRalliesComponent } from './list-promoted-rallies.component';

describe('ListPromotedRalliesComponent', () => {
  let component: ListPromotedRalliesComponent;
  let fixture: ComponentFixture<ListPromotedRalliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPromotedRalliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPromotedRalliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
