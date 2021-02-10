
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../core-files/services/store.service'
import { FilterBrandsPipe } from '../../core-files/pipes/filter-brands.pipe';

@Component({
  selector: 'app-search-keywords',
  templateUrl: './search-keywords.component.html',
  styleUrls: ['./search-keywords.component.scss']
})
export class SearchKeywordsComponent implements OnInit {
  storeList = [];
  storeData = [];
  searchText = '';
  constructor(
    private storeService: StoreService
  ) { }
  ngOnInit() {
    this.storeListing();
  }
  storeListing() {
    this.storeService.storeList().subscribe((data: any) => {
      this.storeData = data.content
      const sorted = data.content.sort((a, b) => a.name > b.name ? 1 : -1);
      const grouped = sorted.reduce((groups, storeArray) => {
        const letter = storeArray.name.charAt(0).toLowerCase();
        groups[letter] = groups[letter] || [];
        groups[letter].push(storeArray);
        return groups;
      }, {});
      this.storeList = Object.keys(grouped).map(key => ({ key, stores: grouped[key], total: grouped[key].length }));;
    });
  }
  filterStore(value) {
    this.searchText = value;
    const filteredbrands = new FilterBrandsPipe().transform(this.storeData, this.searchText);
    const sorted = filteredbrands.sort((a, b) => a.name > b.name ? 1 : -1);
      const grouped = sorted.reduce((groups, storeArray) => {
        const letter = storeArray.name.charAt(0).toLowerCase();
        groups[letter] = groups[letter] || [];
        groups[letter].push(storeArray);
        return groups;
      }, {});
      this.storeList = Object.keys(grouped).map(key => ({ key, stores: grouped[key], total: grouped[key].length }));;
  }
}
