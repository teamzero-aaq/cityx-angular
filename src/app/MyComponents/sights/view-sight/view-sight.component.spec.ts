import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSightComponent } from './view-sight.component';

describe('ViewSightComponent', () => {
  let component: ViewSightComponent;
  let fixture: ComponentFixture<ViewSightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
