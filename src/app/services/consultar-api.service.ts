import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";
import { pokemon } from '../shared/interface/pokemon.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultarApiService {

  baseUrl = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getPokemonList(): any {
    return this.http.get<any[]>(`${this.baseUrl}/pokemon`);
  }

  getPokemonId(id: number | string): Observable<pokemon> {
    return this.http.get<pokemon>(`${this.baseUrl}/pokemon/${id}`)
      .pipe(map((resp: any) => ({
        id: resp.id,
        img: resp.sprites.other.dream_world.front_default,
        name: resp.name,
        ability: resp.abilities.map((ability) => ability.ability.name),
        attack: resp.stats[1].base_stat,
        speciality: resp.stats[2].base_stat,
        defency: resp.stats[3].base_stat,
        url: resp.location_area_encounters
      })))
  }
}
