import React from 'react';

const FilmList = ({films}) => {
    
    const filmOptions = films.map((film, index) => {
        return <div id="each-film">
                    <img src={film.movie_banner} width="200" alt="film banner"/>
                    <li value={index} key={index}>{film.title}</li>
                </div>
    })

    return (
        <div id="main">
        {filmOptions}
        </div>
    )
}

export default FilmList;