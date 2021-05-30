import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'list-data', loadChildren: () => import('./list-data/list-data.module').then(m => m.ListDataModule) }, { path: 'save-data', loadChildren: () => import('./save-data/save-data.module').then(m => m.SaveDataModule) }, { path: 'request-data', loadChildren: () => import('./request-data/request-data.module').then(m => m.RequestDataModule) }, { path: 'main-page', loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
