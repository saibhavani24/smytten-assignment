import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
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
    RouterModule.forChild(routes),
    FormsModule,
    PaginationModule.forRoot()
    // backward compatibility code
    // Ng5SliderModule
  ],
  declarations: [SearchComponent],
  providers: [ProductSearchService]
})
export class SearchModule { }
