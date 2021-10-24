import React from 'react';

const FilmDetail = ({selectedFilm, people}) => {


    const peopleInFilms = people.filter(person => person.films[0] === selectedFilm.url)
    
    const peopleInFilmDetail = peopleInFilms.map((person, index) => {
        return <div key={index}>
        <li>{person.name}</li>
        </div>
})

    return (
            <div id="film-detail">
                <h3>Film Details:</h3>
                {/* {!selectedFilm && <h2>boop</h2>} */}
                {selectedFilm ? <h4>{selectedFilm.title} </h4>: null}
                {selectedFilm ? <p>{selectedFilm.director}  {selectedFilm.release_date}</p>: null}
                {selectedFilm ? <p>{selectedFilm.description}</p>: null}
                {/* <h3>Characters:</h3> */}
                {selectedFilm ? <ul>{peopleInFilmDetail}</ul>: null}
            </div>
    )
}

export default FilmDetail;