import { Component, OnInit } from '@angular/core';
import { ConsultarApiService } from 'src/app/services/consultar-api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor( private listpokemon: ConsultarApiService ) { }

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList() {
    this.listpokemon.getPokemonList().subscribe(
      (data: any) => console.log(data.results)
    );
  }
}
