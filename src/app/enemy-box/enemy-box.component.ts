import { Component } from '@angular/core';
import { CharacterDisplayComponent } from '../character-display/character-display.component';
import { StatusDisplayComponent } from '../status-display/status-display.component';

@Component({
  selector: 'enemy-box',
  standalone: true,
  imports: [CharacterDisplayComponent,StatusDisplayComponent],
  templateUrl: './enemy-box.component.html',
  styleUrl: './enemy-box.component.css'
})
export class EnemyBoxComponent {

}
