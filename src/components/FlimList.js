import React from 'react';

const FilmList = ({films, onFilmSelected, addToWatchList}) => {
    
    const handleFilmSelect = (event) => {
        const chosenFilm = films[event.target.value];
        onFilmSelected(chosenFilm)
    }

    // const handleWatchSelect = (event) => {
    //     const watchFilm = films[event.target.value];
    //     console.log('click worked')
    //     // onWatchSelected(watchFilm)
    // }

    const handleWatchSelect = () => {
        addToWatchList();
    }

    const filmOptions = films.map((film, index) => {
        return <div id="each-film" key={index}>
                    <img src={film.movie_banner} width="200" alt="scene from film"/>
                    <li value={index} onClick={handleFilmSelect}>{film.title}</li>
                    <button onClick={handleWatchSelect}>Watch List</button>
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