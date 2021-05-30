import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveDataComponent } from './save-data.component';

const routes: Routes = [{ path: '', component: SaveDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveDataRoutingModule { }
