import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], searchTerm: string): any[] {
    if (!value || !searchTerm) return value;
    return value.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
