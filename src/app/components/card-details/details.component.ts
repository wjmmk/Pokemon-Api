import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ConsultarApiService } from 'src/app/services/consultar-api.service';
import { pokemon } from 'src/app/shared/interface/pokemon.interface';

@Component({
  selector: 'app-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class DetailsComponent implements OnInit {

  pokemonData: pokemon[] = [];

  constructor( 
    private route: ActivatedRoute,
    private listpokemon: ConsultarApiService 
    ) { }


  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
       this.listpokemon.getPokemonId(parseInt(params.get('id'))).subscribe(
           (result: any) => this.pokemonData = result
        )
      }
    })
  }
}
