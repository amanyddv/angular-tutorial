import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure:false 
  // default pure is true 
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    if (!searchTerm) {
      return value; // Return the original array if no searchTerm is provided
    }

    return value.filter(function(search: any) {
      return search.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}
