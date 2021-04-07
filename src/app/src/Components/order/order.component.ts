import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonService } from '../../Services/PokemonService/pokemon.service';

interface Pokemon {
  pokemon: string
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit, OnDestroy {
  pokemonList: any[] = [];
  subscriptions: Subscription[] = [];
  pokeForm: Pokemon = {
    pokemon: ''
  }

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}

  getPokemon(): void {
    let sub = this.pokemonService
      .getPokemon(this.pokeForm.pokemon)
      .subscribe((pokemon) => {
        const duplicated = this.pokemonList.find((x) => x.name == pokemon.name);

        if (!duplicated) {
          this.pokemonList.push(pokemon);
        }
      });

    this.subscriptions.push(sub);
    this.pokeForm.pokemon = '';
  }

  clear(): void {
    this.pokemonList = []
  }

  ngOnDestroy(): void {
    console.log('cleaning subs');
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
