import { Component, OnInit } from '@angular/core';
import { PokemonListService } from 'src/app/services/pokemon-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemons: any;

  constructor(private service: PokemonListService) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons(){
    this.service.getPokemons().subscribe({
      next: (res: any)=> {  
        this.pokemons = res.results      
        console.log(this.pokemons)
      },
      error: (error: any) => {
        console.error(error)
      }
    })
  }

}
