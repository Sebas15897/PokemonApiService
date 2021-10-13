import { HttpClient } from "@angular/common/http";

export class PokeApi {
    url = "https://pokeapi.co/api/v2/pokemon/";
    constructor(private http: HttpClient) {}
    getPoke() {
        return this.http.get<any>(`${this.url}`);
    }
    getPokemon(id:any) {
        return this.http.get<any>(this.url + id);
    }
    searchPokemon(name:any) {
        return this.http.get<any>(this.url + name);
    }
}