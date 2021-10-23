import React from 'react';

const SeenList = ({seenList}) => {
    
    const seenListDetails = seenList.map((film, index) => {
        return  <li key={index}>{film.title}</li>
                
    })

    return (
        <div id="seen-list">
            <h3>Seen List:</h3>
            <ul>
                {seenListDetails}
            </ul>
        </div>
    )
}

export default SeenList;