import { pokemonApi } from "../../../api/apiPokemon";
import { setPokemons, startLoadingPokemons } from "./PokemonSlice"




function pokWithImg (list , page){
    let auxCont;
    auxCont=  (page==0)? auxCont = page+1 : auxCont= (page*10) + 1;
    let auxList = list.forEach(element => {
        element.img= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${auxCont}.png`
        auxCont++       
    });
    return auxList
}

export const getPokemons = ( page = 0 ) => {
    return async ( dispatch , getState) => {
        dispatch( startLoadingPokemons() );

        const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`)

        pokWithImg(data.results , page)
        



        dispatch( setPokemons( { pokemons:data.results, page: page +1 } ) )
    }
} 