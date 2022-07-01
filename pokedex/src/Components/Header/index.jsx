import React from 'react';
import './style.css';
import pokeBolaGif from '../../assets/gifs/pokebola.gif'

const Header = () => {
    return (
        <div className='header'>
            <span>
                Pokédex
            </span>
            <img src={pokeBolaGif} alt='imagem do header'/>
        </div>
    )
} 

export default Header;