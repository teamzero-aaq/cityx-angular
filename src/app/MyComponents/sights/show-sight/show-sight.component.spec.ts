import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSightComponent } from './show-sight.component';

describe('ShowSightComponent', () => {
  let component: ShowSightComponent;
  let fixture: ComponentFixture<ShowSightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
