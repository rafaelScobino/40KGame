import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryOverlayComponent } from './story-overlay.component';

describe('StoryOverlayComponent', () => {
  let component: StoryOverlayComponent;
  let fixture: ComponentFixture<StoryOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryOverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoryOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
