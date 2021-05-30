import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestDataRoutingModule } from './request-data-routing.module';
import { RequestDataComponent } from './request-data.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio'
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    RequestDataComponent
  ],
  imports: [
    CommonModule,
    RequestDataRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    MatCheckboxModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule
  ]
})
export class RequestDataModule { }
