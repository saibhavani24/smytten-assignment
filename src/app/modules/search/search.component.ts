import { Component, OnInit} from '@angular/core';
import { ProductSearchService } from '../../core-files/services/product-search.service';
@Component({
  selector: 'app-search-desktop',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  products: Object[] = [];
  constructor(
    private productService: ProductSearchService
  ) { }
  ngOnInit() {
    this.productListing();
  }
  productListing(): void {
    this.productService.searchProduct().subscribe((data: any) => {
      this.products = data.content.products
    })
  }
}
