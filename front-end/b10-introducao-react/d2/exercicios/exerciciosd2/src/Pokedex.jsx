import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render(){
        const { pokeInfo } = this.props;
        return(
            <div className="pokedex">
                {pokeInfo.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
            </div>
        )
    }
}

export default Pokedex;