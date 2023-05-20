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
   //this.bar_charts()
  }

  getPokemon(idPokemon: number){
    this.service.getPokemonDetails(idPokemon).subscribe({
      next: (res: any)=> {
        this.pokemon = res
        this.bar_charts()
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

  bar_charts(){
    let percent = "%"    
    
    let elem = <HTMLInputElement>document.getElementById("bar_1")
    elem.style.width = this.pokemon?.stats[0].base_stat.toString() + percent;

    
    
    let elem2 = <HTMLInputElement>document.getElementById("bar_2")
    elem2.style.width = this.pokemon?.stats[2].base_stat.toString() + percent;

    
    let elem3 = <HTMLInputElement>document.getElementById("bar_3")
    elem3.style.width = this.pokemon?.stats[5].base_stat.toString() + percent;

    
    
    let elem4 = <HTMLInputElement>document.getElementById("bar_4")
    elem4.style.width = this.pokemon?.stats[1].base_stat.toString() + percent;


  }

}
