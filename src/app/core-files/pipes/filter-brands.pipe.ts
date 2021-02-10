import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterBrands'
})
export class FilterBrandsPipe implements PipeTransform {
  transform(value: any, input: string) {
    if (input) {
      input = input.toLowerCase();
        return value.filter(function (el: any) {
          if (el.name) {
          return el.name.toLowerCase().includes(input.toLowerCase());
          }
        });
    }
    return value;
  }
}
