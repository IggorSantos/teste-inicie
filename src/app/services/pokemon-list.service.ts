import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class PokemonListService {
  baseUrl = "https://pokeapi.co/api/v2"

  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get(`${this.baseUrl}/pokemon`)
  }

  getPokemon(url: string){
    return this.http.get(url)
  }

  getPokemonDetails(id: number){
    return this.http.get(`${this.baseUrl}/pokemon/${id}`)
  }

  getPokemonCharacteristics(id: number){
    return this.http.get(`${this.baseUrl}/characteristic/${id}`)
  }

}