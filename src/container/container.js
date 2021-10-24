import React, {useState, useEffect} from 'react';
// import FilmList from '../components/FlimList';
// import SeenList from '../components/SeenList';
// import WatchList from '../components/WatchList';
// import FilmDetail from '../components/FilmDetail';

import './container.css'

const Container = () => {

    const [films, setFilms] = useState([]);
    // const [selectedFilm, setSelectedFilm] = useState([]);
    // const [watchList, setWatchList] = useState([]);
    // const [seenList, setSeenList] = useState([]);    


    useEffect(() => {
        getDetailedFilms();
    }, [])


    const getDetailedFilms = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(response => response.json())
        .then(films => {
            const filmPromises = films.people.map((film) => {
                return fetch("https://ghibliapi.herokuapp.com/people")
                .then(response => response.json())
            })
        Promise.all(filmPromises).then((allData) => {setFilms(allData)})
        })
    }

    // const onFilmSelected = (film) => {
    //     setSelectedFilm(film)
    //     console.log("image clicked")
    // } 

    // const addToWatchList = (film) => {
    //     const updatedWatchList = [...watchList, film]
    //     setWatchList(updatedWatchList);
    // }

    // const addToSeenList = (film) => {
    //     const updatedSeenList = [...seenList, film]
    //     setSeenList(updatedSeenList);
    // }

    return (
        <p>did it work?</p>
        // <div id="container-grid">
        //     <FilmList films={films} onFilmSelected={onFilmSelected} addToWatchList={addToWatchList} addToSeenList={addToSeenList}/>
        //     {watchList ? <WatchList watchList={watchList}/>:null}
        //     {seenList ? <SeenList seenList={seenList}/>:null}
        //     <FilmDetail selectedFilm={selectedFilm} />
        //     {/* {/* <FilmDetail selectedFilm={selectedFilm}/>/} */}
        // </div>
    )
}

export default Container;