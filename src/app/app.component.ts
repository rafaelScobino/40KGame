import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZanasFooterComponent } from './zanas-footer/zanas-footer.component';
import { StoryOverlayComponent } from './story-overlay/story-overlay.component';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ZanasFooterComponent,StoryOverlayComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '40kGame';
}
