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
    this.route.paramMap.subscribe( params => {
      if(params.has('id')){
        this.listpokemon.getPokemonId(parseInt(params.get('id'))).subscribe(
           (result: any) => {  this.listpokemon.getPokemonId(result.id).subscribe(
            (data: any) => console.log(data)
          )
         } 
        )
      }
    })
  }
}
