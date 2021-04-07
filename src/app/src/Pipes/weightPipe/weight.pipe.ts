import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'weight',
  pure: false
})
export class WeightPipe implements PipeTransform {

  transform(pokemonList: any[], higherThan: number): any[] {
    return pokemonList.filter(x => {
      return x.weight > higherThan
    });
  }

}
