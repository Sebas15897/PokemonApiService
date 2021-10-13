import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './Components/details/details.component';
import { PokemonsComponent } from './Components/pokemons/pokemons.component';

export const appRoutes: Routes = [
    { path: '', component: PokemonsComponent},
    {path:'details', component:DetailsComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
