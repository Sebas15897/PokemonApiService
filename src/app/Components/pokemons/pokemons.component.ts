import { Component, OnInit } from '@angular/core';
import { PokeApi } from 'src/app/Service/apipoke.service';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { PokesStates } from 'src/app/store/pokes.states';
import { Observable } from 'rxjs';
import { Pokes } from 'src/app/store/pokes.models';
import { getDetailsPoke, getPoke, getPokeImage } from 'src/app/store/pokes.actions';


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
  habili = '';
  constructor(/* private data: PokeApi, private router:Router */ private store: Store) {
    /* this.getPokemons() */
  }

  @Select(PokesStates.loadPokes) pokes$: Observable<Pokes[]>
  @Select(PokesStates.loadImg) pokesimg$: Observable<any>
  @Select(PokesStates.loadD) pokesD: Observable<any>

  ngOnInit(): void {
    this.store.dispatch(new getPoke())
    this.pokes$.subscribe((res) => {
      console.log("controladors",res)
      this.pokes = res;
    })
  }

  searchPokemon(name:any) {
    this.store.dispatch(new getPokeImage(name));
    this.pokesimg$.subscribe((res) => {
      this.img = res.url;
      this.name = res.name

    })
  }
  
  detalle(name:any) {
    console.log("detalle" + name);
    this.store.dispatch(new getDetailsPoke(name));
    this.pokesD.subscribe((res) => {
      this.img = res.url;
      this.name = res.name;
    })
  }
  
}
