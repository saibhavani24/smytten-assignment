import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchKeywordsComponent } from './search-keywords.component';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { Routes, RouterModule } from '@angular/router';
import { StoreService } from '../../core-files/services/store.service';
const routes: Routes = [
  {
    path: '',
    component: SearchKeywordsComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    RouterModule.forChild(routes),
  ],
  declarations: [SearchKeywordsComponent],
  providers: [StoreService]
})
export class SearchKeywordsModule { }
