import React, {useState, useEffect} from 'react';
import FilmList from '../components/FlimList';
import SeenList from '../components/SeenList';
import WatchList from '../components/WatchList';
import FilmDetail from '../components/FilmDetail';

import './container.css'

const Container = () => {

    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState([]);
    // const [species, setSpecies] = useState([])

    useEffect(() => {
        fetchFilms();
    }, [])

    useEffect(() => {
        fetchPeople();
    }, [])

    const fetchFilms = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(response => response.json())
        .then(films => setFilms(films))
    }

    const fetchPeople = () => {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(response => response.json())
        .then(people => setPeople(people))
    }

    const onFilmSelected = (film) => {
        setSelectedFilm(film)
        console.log("image clicked")
    } 

    return (
        <div id="container-grid">
            <FilmList films={films} onFilmSelected={onFilmSelected}/>
            <WatchList />
            <SeenList />
            {/* {selectedFilm ? <FilmDetail selectedFilm={selectedFilm}/> :null} */}
            {/* <FilmDetail selectedFilm={selectedFilm}/> */}
        </div>
    )
}

export default Container;