import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class StoreService {
  constructor(
    private http: HttpClient
  ) { }
  storeList() {
    return this.http.get('../../../assets/stores.json');
  }
}
