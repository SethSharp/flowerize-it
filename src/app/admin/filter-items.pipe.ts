import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterItems',
})
export class FilterItemsPipe implements PipeTransform {
  transform(orders: any, searchValue: any): any {
    if (!searchValue) return orders;
    return orders.filter((v: any) => v.category.indexOf(searchValue) > -1);
  }
}
