import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipBoxComponent } from './equip-box.component';

describe('EquipBoxComponent', () => {
  let component: EquipBoxComponent;
  let fixture: ComponentFixture<EquipBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
