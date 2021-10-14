import { HttpClient } from "@angular/common/http";

export class PokeApi {
    url = "https://pokeapi.co/api/v2/pokemon/";
    constructor(private http: HttpClient) {}
    getPoke() {
        return this.http.get<any>(`${this.url}`);
    }
    getPokemon(name:any) {
        return this.http.get<any>(this.url + name);
    }
    searchPokemon(name:any) {
        return this.http.get<any>(this.url + name);
    }
}