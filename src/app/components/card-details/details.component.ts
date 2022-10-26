import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultarApiService } from 'src/app/services/consultar-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor( 
    private route: ActivatedRoute,
    private listpokemon: ConsultarApiService 
    ) { }

  pokemonData: any[] = [];


  ngOnInit(): any {
      this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
       this.listpokemon.getPokemonId(parseInt(params.get('id'))).subscribe(
          async (result: any) =>  {             
             const pokemonCard = {
               id: result.id,
               img: result.sprites.other.dream_world.front_default,
               name: result.name,
               ability: result.abilities.map((ability) => ability.ability.name),
               attack: result.stats[1].base_stat,
               speciality: result.stats[2].base_stat,
               defency: result.stats[3].base_stat,
               url: result.location_area_encounters
             }
            console.log(pokemonCard)
            this.pokemonData.push(pokemonCard)
          } 
        )
      }
    })
  }
}
