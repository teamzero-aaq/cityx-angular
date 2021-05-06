import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSightComponent } from './delete-sight.component';

describe('DeleteSightComponent', () => {
  let component: DeleteSightComponent;
  let fixture: ComponentFixture<DeleteSightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
