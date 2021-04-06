import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonService } from '../../Services/PokemonService/pokemon.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit, OnDestroy {
  pokemonList: any[] = [];
  pokeSearch: string = '';
  subscriptions: Subscription[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}

  getPokemon(): void {
    let sub = this.pokemonService
      .getPokemon(this.pokeSearch)
      .subscribe((pokemon) => {
        const duplicated = this.pokemonList.find((x) => x.name == pokemon.name);

        if (!duplicated) {
          this.pokemonList.push(pokemon);
        }
      });

    this.subscriptions.push(sub);
  }

  clear(): void {
    this.pokemonList = []
  }

  ngOnDestroy(): void {
    console.log('cleaning subs');
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
