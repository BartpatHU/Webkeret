import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveDataRoutingModule } from './save-data-routing.module';
import { SaveDataComponent } from './save-data.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SaveDataComponent
  ],
  imports: [
    CommonModule,
    SaveDataRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ]
})
export class SaveDataModule { }
