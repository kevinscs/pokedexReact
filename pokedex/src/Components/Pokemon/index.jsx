import React from 'react';
import './style.css';
import pokemonImg from '../../assets/png/treecko.png'

const Pokemon = () => {
    return (
        <div className='pokemon'>
            <span>
                Treecko
            </span>
            <img className='pokemonImg' src={pokemonImg} alt='imagem do Treecko'/>
            <span className='description'>
                Treecko is cool, calm, and collected - it never panics under any situation. If a bigger foe were to glare at this Pokémon, it would glare right back without conceding an inch of ground. It makes its nest in a giant tree in the forest. It ferociously guards against anything nearing its territory.
            </span>
            <span className='pokemonType'>
                Grass
            </span>
        </div>
    )
} 

export default Pokemon;