import { Routes } from '@angular/router';
import { NewGameComponent } from './new-game/new-game.component';
import { MainGameComponent } from './main-game/main-game.component';

export const routes: Routes = [
  {path:'',component:NewGameComponent},
  {path:'mainGame',component:MainGameComponent}
];
