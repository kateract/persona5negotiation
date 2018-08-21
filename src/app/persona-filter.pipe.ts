import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../models/persona';

@Pipe({
  name: 'personaFilter'
})
export class PersonaFilterPipe implements PipeTransform {

  transform(items: Persona[], searchText: string): Persona[] {
    if (!items) { return []; }
    if (!searchText) { return items; }

    searchText = searchText.toLowerCase();
    return items.filter( (it: Persona) => {
      return (it.name && it.name.toLowerCase().includes(searchText)) || (it.codeName && it.codeName.toLowerCase().includes(searchText));
    });
  }

}
