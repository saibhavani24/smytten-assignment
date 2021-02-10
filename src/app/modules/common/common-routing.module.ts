import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      loadChildren: () => import('../search/search.module').then(m => m.SearchModule)
    }]
  },
  {
    path: 'store-search',
    children: [{
      path: '',
      loadChildren: () => import('../search-keywords/search-keywords.module').then(m => m.SearchKeywordsModule)
    },
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class CommonRoutingModule { }
