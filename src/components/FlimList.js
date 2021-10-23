import React from 'react';

const FilmList = ({films, onFilmSelected, addToWatchList, addToSeenList}) => {
    
    const handleFilmSelect = (event) => {
        const chosenFilm = films[event.target.value];
        onFilmSelected(chosenFilm)
    }

    // const handleWatchSelect = (event) => {
    //     const watchFilm = films[event.target.value];
    //     console.log('click worked')
    //     // onWatchSelected(watchFilm)
    // }

    const handleWatchSelect = (event) => {
        console.log("watch button clicked")
        const filmToAdd = films[event.target.value];
        addToWatchList(filmToAdd);
    }

    const handleSeenSelect = (event) => {
        console.log("seen button clicked")
        const filmToAddSeen = films[event.target.value];        
        addToSeenList(filmToAddSeen);
    }

    const filmOptions = films.map((film, index) => {
        return <div id="each-film" key={index}>
                    <img src={film.movie_banner} width="200" alt="scene from film"/>
                    <li value={index} onClick={handleFilmSelect}>{film.title}</li>
                    <button value={index} onClick={handleWatchSelect}>Watch List</button>
                    <button value={index} onClick={handleSeenSelect}>Seen List</button>
                </div>
    })

    return (
        <div id="main">
        {filmOptions}
        </div>
    )
}

export default FilmList;