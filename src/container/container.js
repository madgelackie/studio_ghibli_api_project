import React, {useState, useEffect} from 'react';
import FilmList from '../components/FlimList';
import SeenList from '../components/SeenList';
import WatchList from '../components/WatchList';
import './container.css'

const Container = () => {

    const [films, setFilms] = useState([])
    const [people, setPeople] = useState([])
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

    return (
        <div id="container-grid">
            <FilmList films={films}/>
            <WatchList />
            <SeenList />
        </div>
    )
}

export default Container;