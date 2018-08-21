import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionFilter'
})
export class QuestionFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }

    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.text.toLowerCase().includes(searchText);
    });
  }

}
