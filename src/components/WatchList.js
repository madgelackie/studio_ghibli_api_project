import React from 'react';

const WatchList = ({watchList}) => {
    
    const watchListDetails = watchList.map((film, index) => {
        return  <div key={index}>
                    <li>{film.title}</li>
                </div>
    })

    return (
        <li>{watchListDetails}</li>
    )
}

export default WatchList;