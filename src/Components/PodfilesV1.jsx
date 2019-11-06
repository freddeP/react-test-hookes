import React from 'react';

function Podfiles(podfiles) {
  
  // use regular js...
  let html = podfiles.podfiles.map(pf=>{

    return `
    <h1>${pf.title}</h1>
    <small>${pf.description}</small>
    <audio controls>
        <source src=${pf.url} type="audio/mpeg"></source>
    </audio>   
    `;

  });



  return(

    <div dangerouslySetInnerHTML={{__html: html}} ></div>

   );  // end return
}

export default Podfiles;


/*       <div className = "clickeble podfiles" >
      <h1>Title:{pf.title}</h1>
     <small>{pf.description}</small>
     <audio controls>
         <source src={pf.url} type="audio/mpeg"></source>
     </audio>   
 </div> */