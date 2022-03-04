import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterOrdersPipe implements PipeTransform {

  transform(orders: any, searchValue:any): any {
    if (!searchValue) return orders;
    return orders.filter((v:any) => v.id.indexOf(searchValue) > -1);
  }
}
