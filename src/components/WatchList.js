import React from 'react';

const WatchList = ({watchList}) => {
    
    const watchListDetails = watchList.map((film, index) => {
        return  <li key={index}>{film.title}</li>
                
    })

    return (
        <div id="watch-list">
            <h3>Watch List:</h3>
            <ul>
                {watchListDetails}
            </ul>
        </div>
    )
}

export default WatchList;