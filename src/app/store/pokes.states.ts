import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Pokes, PokesI } from './pokes.models';
import { PokeApi } from '../Service/apipoke.service';
import { getDetailsPoke, getPoke, getPokeImage } from './pokes.actions';
import { tap } from 'rxjs/operators';


@State<Pokes>({
    name: 'pokes',
    defaults: {
        pokes: [],
        pokesd: [{
            name: '',
            url: ''
        }]
    }
})

export class PokesStates {
    constructor(private htpp: PokeApi) { }
    //Selector detalles
    @Selector()
    static loadD(state: Pokes) {
        return state.pokesd
    }

    //Selector pokes
    @Selector()
    static loadPokes(state: Pokes) {
        return state.pokes
    }
    //Obtener pokémon
    @Action(getPoke)
    getPokes({ getState, setState }: StateContext<Pokes>) {
        return this.htpp.getPoke().pipe(
            tap(res => {
                const state = getState();
                setState({
                    ...state,
                    pokes: res.results
                })
            })
        )
    }
    //Obtener detalles y imagenes
    @Action(getDetailsPoke)
    getD({ getState, setState }: StateContext<Pokes>, { payload }: getDetailsPoke) {
        return this.htpp.getPokemon(payload).pipe(
            tap((res) => {
                const state = getState();
                const elements = {
                    url: res.sprites.front_default,
                    name: res.name
                }
                setState({
                    ...state,
                    pokesd: elements
                })
            })
        )
    }
}
