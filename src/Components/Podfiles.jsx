import React from 'react';

function Podfiles(pf) {

    return(
        <div className = "clickeble podFiles">
            <h1>{pf.title}</h1>
            <i>{pf.description}</i><br></br>
           
            <audio controls>
                <source src={pf.url} type="audio/mpeg"></source>
            </audio>
            
        </div>   

    );
}

export default Podfiles;