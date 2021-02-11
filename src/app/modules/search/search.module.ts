import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';
import { ProductSearchService } from '../../core-files/services/product-search.service';
const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchComponent],
  providers: [ProductSearchService]
})
export class SearchModule { }
