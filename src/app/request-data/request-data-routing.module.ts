import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestDataComponent } from './request-data.component';

const routes: Routes = [{ path: '', component: RequestDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestDataRoutingModule { }
