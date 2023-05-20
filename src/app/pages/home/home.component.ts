import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { PokemonListService } from 'src/app/services/pokemon-list.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup | any = '';
  pokemons: any;
  pokes: Array<any> = [];

  constructor(private service: PokemonListService, private router: Router) { }

  ngOnInit(): void {
    this.buildForm()
    this.getPokemons()
  }

  buildForm(){
    this.form = new FormGroup({
      term: new FormControl(' ')
    })
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

  searchPokemon(){
    if(this.form.value.term == ' '){
      console.log("String vazia")
      Swal.fire({
        title: 'Erro!',
        text: 'Digite algum pokemon que queira pesquisar',
        icon: 'error',
        timer: 3000,
        showConfirmButton: false
      })
    }else{
      this.router.navigate(['/search', { search: JSON.stringify(this.form.value.term)}])
    }

  }

}
