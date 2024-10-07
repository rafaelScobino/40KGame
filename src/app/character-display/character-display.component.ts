import { Component, Input } from '@angular/core';

@Component({
  selector: 'character-display',
  standalone: true,
  imports: [],
  templateUrl: './character-display.component.html',
  styleUrl: './character-display.component.css'
})
export class CharacterDisplayComponent {
@Input() charName!:string;
@Input() imgSrc!:string;


}
