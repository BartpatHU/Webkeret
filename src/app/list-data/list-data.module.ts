import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDataRoutingModule } from './list-data-routing.module';
import { ListDataComponent } from './list-data.component';


@NgModule({
  declarations: [
    ListDataComponent
  ],
  imports: [
    CommonModule,
    ListDataRoutingModule
  ]
})
export class ListDataModule { }
