import { Component, OnInit } from '@angular/core';
import { PokemonListService } from 'src/app/services/pokemon-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemons: any;
  pokes: Array<any> = [];

  constructor(private service: PokemonListService) { }

  ngOnInit(): void {
    this.getPokemons()
    //this.getPokemon()
  }

  getPokemons(){
    this.service.getPokemons().subscribe({
      next: (res: any)=> {  
        this.pokemons = res.results      
        this.pokemons.forEach((pokemon: any) => {
          this.getPokemon(pokemon)          
        });
      },
      error: (error: any) => {
        console.error(error)
      }
    })
  }

  getPokemon(pokemon: any){
    this.service.getPokemon(pokemon.url).subscribe({
      next: (res: any)=> {               
        this.pokes.push(res)
      },
      error: (error: any) => {
        console.error(error)
      }
    }) 
  }

}
