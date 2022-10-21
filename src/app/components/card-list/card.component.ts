import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultarApiService } from 'src/app/services/consultar-api.service';
import { pokemon } from 'src/app/shared/interface/pokemon.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardComponent implements OnInit {

  GlobalListPokemon: pokemon[];
  PokemonToDiscovery: pokemon[];

  constructor( 
    private router: Router,
    private listpokemon: ConsultarApiService 
    ) { }

  ngOnInit(): void {
    this.getPokemonList();
    this.listpokemon.getPokemonList().subscribe(
      (pokemonId: any) => this.PokemonToDiscovery = pokemonId   
    )
  }

  getPokemonList() {
    this.listpokemon.getPokemonList().subscribe(
      (data: any) => {
        console.log(data.results)
        this.GlobalListPokemon = data.results
        const pokemon = {
            name: data.results[0].name,
            url: data.results[0].url
        }
        console.log(pokemon)
      }
    );
  }

  goCard(id: any): void {
    this.router.navigate(['/home/details', id])
  }

}
