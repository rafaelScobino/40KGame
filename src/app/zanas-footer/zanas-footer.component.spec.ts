import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZanasFooterComponent } from './zanas-footer.component';

describe('ZanasFooterComponent', () => {
  let component: ZanasFooterComponent;
  let fixture: ComponentFixture<ZanasFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZanasFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZanasFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
