import React from 'react';

const FilmList = ({films, onFilmSelected}) => {
    
    const handleFilmSelect = (event) => {
        const chosenFilm = films[event.target.value];
        console.log(chosenFilm)
        onFilmSelected(chosenFilm)
    }

    const filmOptions = films.map((film, index) => {
        return <div id="each-film" value={index} key={index} >
                    <img src={film.movie_banner} width="200" alt="film banner"/>
                    <li onClick={handleFilmSelect}>{film.title}</li>
                    <button>Watch List</button>
                    <button>Seen List</button>
                </div>
    })

    return (
        <div id="main">
        {filmOptions}
        </div>
    )
}

export default FilmList;