import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionWheelComponent } from './action-wheel.component';

describe('ActionWheelComponent', () => {
  let component: ActionWheelComponent;
  let fixture: ComponentFixture<ActionWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionWheelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActionWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
