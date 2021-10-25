import React, {useState, useEffect} from 'react';
import FilmList from '../components/FlimList';
import SeenList from '../components/SeenList';
import WatchList from '../components/WatchList';
import FilmDetail from '../components/FilmDetail';

import './container.css'

const Container = () => {

    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);
    const [species, setSpecies] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState([]);
    const [watchList, setWatchList] = useState([]);
    const [seenList, setSeenList] = useState([]);   
    // const [peopleInFilm, setPeopleInFilm] = useState([]);
    

    useEffect(() => {
        fetchFilms();
    }, [])

    useEffect(() => {
        fetchPeople();
    }, [])

    useEffect(() => {
        fetchSpecies();
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

    const fetchSpecies = () => {
        fetch("https://ghibliapi.herokuapp.com/species")
        .then(response => response.json())
        .then(species => setSpecies(species))
    }

// this function works to return people in films but creates an infinte re-render if i set it as state and use as props and pass through to filmDetail.  
// const peopleInFilms = people.filter(person => person.films[0] === selectedFilm.url)
// console.log(peopleInFilms)

// This makes shorter people objects, with fewer key:value pairs.
// const newPeopleObject = people.map((person) => {
//     return ({id:person.id, name:person.name, films:person.films})
// })

// const experiment = people.find(person => person.id === "267649ac-fb1b-11eb-9a03-0242ac130003")
// console.log(experiment.species)

// const experiment = people.filter(function (person) 
//     {person.films.includes ("https://ghibliapi.herokuapp.com/films/dc2e6bd1-8156-4886-adff-b39e6043af0c")})
// console.log(experiment)

// const newPeopleList = people.map(person => person.species = species.find(species => species.url === person.species))

    const onFilmSelected = (film) => {
        setSelectedFilm(film)
    } 

    const addToWatchList = (film) => {
        const updatedWatchList = [...watchList, film]
        setWatchList(updatedWatchList);
    }

    const addToSeenList = (film) => {
        const updatedSeenList = [...seenList, film]
        const seenObjectID = film.id
        setSeenList(updatedSeenList);
        const filteredWatchArray = watchList.filter(watchFilm => watchFilm.id !== seenObjectID)
        setWatchList(filteredWatchArray)
        }

    return (
        <div id="container-grid">
            <FilmList films={films} onFilmSelected={onFilmSelected} addToWatchList={addToWatchList} addToSeenList={addToSeenList}/>
            {watchList ? <WatchList watchList={watchList}/>:null}
            {seenList ? <SeenList seenList={seenList}/>:null}
            <FilmDetail selectedFilm={selectedFilm} people={people}/>
        </div>
    )
}

export default Container;