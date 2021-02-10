
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ProductSearchService {
  constructor(
    private http: HttpClient
  ) { }
  searchProduct(params: any = {}) {
    return this.http.get('../../../assets/items.json');
  }
}
