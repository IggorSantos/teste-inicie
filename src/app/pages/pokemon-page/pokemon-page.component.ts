import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonListService } from 'src/app/services/pokemon-list.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {
  pokemon: any;
  idPokemon: number = 0;
  pokemonDescription: string = ' ';

  constructor(
    private router: ActivatedRoute,
    private service: PokemonListService) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.idPokemon = JSON.parse(this.router.snapshot.params['pokemon']);
      console.log(this.idPokemon)
    })
   this.getPokemon(this.idPokemon)
   this.getPokemonDescription(this.idPokemon)
  }

  getPokemon(idPokemon: number){
    this.service.getPokemonDetails(idPokemon).subscribe({
      next: (res: any)=> {
        this.pokemon = res
        console.log(this.pokemon)
      },
      error: (err: any) => {
        console.error(err)
      }
    })
  }

  getPokemonDescription(idPokemon: number){
    this.service.getPokemonCharacteristics(idPokemon).subscribe({
      next: (res: any)=> {
        this.pokemonDescription = res.descriptions[7].description
        console.log(this.pokemonDescription)
      },
      error: (err: any) => {
        console.error(err)
      }
    })

  }

}
