import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemyBoxComponent } from './enemy-box.component';

describe('EnemyBoxComponent', () => {
  let component: EnemyBoxComponent;
  let fixture: ComponentFixture<EnemyBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnemyBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnemyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
