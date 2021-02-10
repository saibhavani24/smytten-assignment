import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CommonComponent } from './core-files/common/common.component';
const routes: Routes = [
  {
    path: '',
    component: CommonComponent,
    data: {
      key: 'value',
      previousUrl: null
    },
    children: [{
      path: '',
      loadChildren: () => import('./modules/common/app-common.module').then(m => m.AppCommonModule)
    }]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }];
@NgModule({
  declarations: [
    CommonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: false})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
