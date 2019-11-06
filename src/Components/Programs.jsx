import React from 'react';

function Program(program) {
   

return (
    <div className = "clickeble programs" >
        <h1>{program.name}</h1>
        <small>{program.description}</small>
     </div>
  )

}

export default Program;
