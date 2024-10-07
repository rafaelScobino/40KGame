import { Component } from '@angular/core';
import { EquipBoxComponent } from '../equip-box/equip-box.component';
import { ItemsBoxComponent } from '../items-box/items-box.component';

@Component({
  selector: 'inventory-box',
  standalone: true,
  imports: [EquipBoxComponent,ItemsBoxComponent],
  templateUrl: './inventory-box.component.html',
  styleUrl: './inventory-box.component.css'
})
export class InventoryBoxComponent {

}
