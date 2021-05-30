import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

import { ListDataRoutingModule } from './list-data-routing.module';
import { ListDataComponent } from './list-data.component';


@NgModule({
  declarations: [
    ListDataComponent
  ],
  imports: [
    CommonModule,
    ListDataRoutingModule,
    MatButtonModule
  ]
})
export class ListDataModule { }
