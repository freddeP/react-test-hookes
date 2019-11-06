import React from 'react';

function Channel(channel) {
   
return (
    <div className = "clickeble channels" key={channel.id}>
      <h1>{channel.name}</h1>
      <img style={{width:'100px'}} alt = {channel.id} src = {channel.img}></img>
    </div>
  )

}

export default Channel;
