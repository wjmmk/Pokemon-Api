import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultarApiService {

  baseUrl = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getPokemonList(): any {
    return this.http.get<any[]>(`${this.baseUrl}/pokemon`);
  }

  getPokemonId(id: number): any {
    return this.http.get<any>(`${this.baseUrl}/pokemon/${id}`);
  }
}
