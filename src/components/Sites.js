import React from 'react';
import EncryptMe from '../gifs/EncryptMe.gif'
import GeographyGame from '../gifs/GeographyGame.gif'

const Sites = () => {
    return (
        <div className='sites'>
            <div className='gifs'>
                <p>Word-Encryption Website</p>
                <a className='links' href='http://encrypt-me-app.herokuapp.com/'>See it online</a>
                <img className='gifImg' src={EncryptMe} alt='loading...'/>
            </div>
            <div className='gifs'>
                <p>Educational Geography Game</p>
                <a className='links' href='https://geography-game.herokuapp.com/'>See it online</a>
                <img className='gifImg' src={GeographyGame} alt='loading...'/>
            </div>
        </div>
    );
};

export default Sites;