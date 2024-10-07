import { Component } from '@angular/core';
import { GameMenuComponent } from '../game-menu/game-menu.component';
import { PlayerBoxComponent } from '../player-box/player-box.component';
import { EnemyBoxComponent } from '../enemy-box/enemy-box.component';
import { InventoryBoxComponent } from '../inventory-box/inventory-box.component';


@Component({
  selector: 'app-main-game',
  standalone: true,
  imports: [GameMenuComponent,PlayerBoxComponent,EnemyBoxComponent,InventoryBoxComponent],
  templateUrl: './main-game.component.html',
  styleUrl: './main-game.component.css'
})
export class MainGameComponent {

}
