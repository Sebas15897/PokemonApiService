import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokeApi } from './Service/apipoke.service';
import { PokemonsComponent } from './Components/pokemons/pokemons.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { PokesStates } from './store/pokes.states';
import { AppRoutingModule } from './app-routing.module';
import { PokehomeComponent } from './Components/pokehome/pokehome.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    NavBarComponent,
    PokehomeComponent, 
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RouterModule,
    AppRoutingModule, 
    FormsModule,
    NgxsModule.forRoot([PokesStates],
      { developmentMode: !environment.production }
    ),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    })
  
  ],
  providers: [PokeApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
