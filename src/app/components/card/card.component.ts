import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('pokemon') pokemon: any

  constructor(private route: Router) { }

  ngOnInit(): void {
    console.log(this.pokemon)
  }

  navigatePage(id: string){
    this.route.navigate([
      '/pokemon-page',
      { pokemon:JSON.stringify(id)}
    ])    
  }

}
