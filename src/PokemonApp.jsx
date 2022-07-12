import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon'

export const PokemonApp = () => {


    const dispatch = useDispatch();

    const {isLoading, pokemons = [], page} = useSelector(state => state.pokemons)

    useEffect(() => {
        dispatch( getPokemons() )  
    }, [])

    return (
        <>
        <h1>PokemonApp</h1>
        <hr />

        <span> Loading : { isLoading ? 'True': 'False' } </span>
        <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">

                    <ul className="list-group">
                        {/* <pre>
                            {pokemons  }
                        </pre> */}
                        {
                            pokemons.map( ({ name , img }) => (

                                <li key={name} className="list-group-item list-group-item-dark text-center pb-5 pt-3" >
                                    <img src={ img } alt="" className="img-fluid " width="60%"/>
                                    <h2>Name: { name.toUpperCase() } </h2>
                                </li>
                            ))
                        }
                    </ul>  
                </div>
                <div className="col 3"></div>
            </div>
        </div>

        <button className="btn btn-primary mt-4" disabled={ isLoading } onClick={ () => dispatch( getPokemons(page) ) }>
            Next
        </button>
        </>
    )
}
