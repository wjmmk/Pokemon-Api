import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultarApiService } from 'src/app/services/consultar-api.service';
import { pokemon }  from '../../shared/interface/pokemon.interface'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor( 
    private route: ActivatedRoute,
    private listpokemon: ConsultarApiService 
    ) { }

  pokeResult: pokemon[]; 


  ngOnInit(): any {
    this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.listpokemon.getPokemonId(parseInt(params.get('id'))).subscribe(
          (result: any) => {
            const pokemonCard = [{
              id: result.id,
              img: result.sprites.other.dream_world.front_default,
              name: result.name,
              ability: result.abilities.map((ability) => ability.ability.name),
              attack: result.stats[1].base_stat,
              speciality: result.stats[2].base_stat,
              defency: result.stats[3].base_stat,
              url: result.location_area_encounters
            }]
            console.log(pokemonCard)
            this.pokeResult = pokemonCard
            this.listpokemon.getPokemonId(result.id).subscribe(
              (data: any) => {                  
              }
            )
          }
        )
      }
    })
  }
}
