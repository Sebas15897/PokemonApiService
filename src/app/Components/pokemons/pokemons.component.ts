import { Component, OnInit } from '@angular/core';
import { PokeApi } from 'src/app/Service/apipoke.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokes = [];
  pokes2 = [];
  titulo = 'Pokédex';
  pokemon ={}
  name = '';
  img = '';
  des = '';
  constructor(private data: PokeApi, private router:Router) {
    this.getPokemons()
  }

  ngOnInit(): void {
  }

  getPokemons() {
    this.data.getPoke().subscribe(res => {
      this.pokes = res.results
      console.log(this.pokes)
    })
  }

  detalle(i) {
    console.log(i);
    this.data.getPokemon(i).subscribe((res) => {
      this.pokes2 = res.abilities;
    })
  }

  searchPokemon(name:any) {
    

   this.data.searchPokemon(name).subscribe(res => {
      console.log(res);
      this.img = res.sprites.front_default;
      this.name = res.name;
    })  
  }


  delete(name:any){
    this.pokes = this.pokes.filter(x=> x.name !== name)
    console.log(name, "id delete")
  }

}
