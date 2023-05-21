import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonListService } from 'src/app/services/pokemon-list.service';
import { Pokemon } from 'src/app/models/pokemon.model';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string = '';
  pokemons: Array<Pokemon> = [];
  exists: boolean = true;

  constructor(private activated: ActivatedRoute, private service: PokemonListService ) { }

  ngOnInit(): void {
    this.search = this.activated.snapshot.params['search']
    this.getSearchPokemon()
  }

  getSearchPokemon(){
    console.log(this.search)
    this.service.getPokemonByName(this.search.replace(/['"]+/g, '').trim()).subscribe({
      next: (res: any) => {
        this.pokemons.push(res)
      },
      error: (err: any) => {        
        console.error(err)
        this.exists = false
        Swal.fire({
          title: 'Erro!',
          text: 'Pokemon não encontrado',
          icon: 'error',
          timer: 3000,
          showConfirmButton: false
        })
      }
    })
  }


}
