import React from 'react';

const FilmDetail = ({selectedFilm}) => {

    return (
            <div id="film-detail">
                <h3>Film Details:</h3>
                {/* {!selectedFilm && <h2>boop</h2>} */}
                {selectedFilm ? <h4>{selectedFilm.title} </h4>: null}
                {selectedFilm ? <p>{selectedFilm.director}  {selectedFilm.release_date}</p>: null}
                {selectedFilm ? <p>{selectedFilm.description}</p>: null}
            </div>
    )
}

export default FilmDetail;