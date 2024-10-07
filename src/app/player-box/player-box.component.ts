import { Component } from '@angular/core';
import { CharacterDisplayComponent } from '../character-display/character-display.component';
import { StatusDisplayComponent } from '../status-display/status-display.component';
import { ActionWheelComponent } from '../action-wheel/action-wheel.component';

@Component({
  selector: 'player-box',
  standalone: true,
  imports: [CharacterDisplayComponent,StatusDisplayComponent,ActionWheelComponent],
  templateUrl: './player-box.component.html',
  styleUrl: './player-box.component.css'
})
export class PlayerBoxComponent {

}
