import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokeApi } from './Service/apipoke.service';
import { DetailsComponent } from './Components/details/details.component';
import { PokemonsComponent } from './Components/pokemons/pokemons.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routing';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    PokemonsComponent,
    NavBarComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule, HttpClientModule, RouterModule, FormsModule
  ],
  providers: [PokeApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
