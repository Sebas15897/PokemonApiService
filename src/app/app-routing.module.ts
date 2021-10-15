import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { PokehomeComponent } from './Components/pokehome/pokehome.component';
import { PokemonsComponent } from './Components/pokemons/pokemons.component';

const routes: Routes = [
    {path: 'home', component: PokehomeComponent},
    {path: 'pokedex', component: PokemonsComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
