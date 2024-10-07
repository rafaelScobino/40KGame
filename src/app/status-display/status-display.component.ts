import { Component, Input } from '@angular/core';

@Component({
  selector: 'status-display',
  standalone: true,
  imports: [],
  templateUrl: './status-display.component.html',
  styleUrl: './status-display.component.css'
})
export class StatusDisplayComponent {
  //Combat Stats
  @Input() health!:string;
  @Input() armor!:string;
  @Input() mDmg!:string;
  @Input() rDmg!:string;
  @Input() ammo!:string;

  //Base stats
  @Input() str!:string;
  @Input() acc!:string;
  @Input() intimid!:string;
  @Input() dex!:string;
  @Input() int!:string;



}
