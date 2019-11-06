import React, { useState } from 'react';
import Channels from "./Components/Channels";
import Programs from "./Components/Programs";
import './App.css';
import Podfiles from './Components/Podfiles';


function App() {

 // State
  const [channels, setChannels] = useState([{name:"TEst", id:102391209,image:"asdfölkfsdj"}]);
  const [programs, setPrograms] = useState([]);
  const [podFiles, setPodFiles] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [search, setSearch] = useState("Search Word");

  // Html som skall returneras till DOM
  return (
    <React.Fragment>
      <div>
        <h3>This is my react app</h3>
        <button onClick = {()=>getChannels()}>Get Channels</button>
      </div>
      <div className="App">
        <div>
          <h1>Channels</h1>
          {channels.map(ch=><div key={ch.id} onClick={()=>{getPrograms(ch.id)}}><Channels  id={ch.id} name={ch.name} img ={ch.image}  ></Channels></div>)}   
        </div>
        <div>
          <input value = {search} onChange={e=>setSearch(e.target.value)}  id = "s"></input>
          <h2>{search}</h2>
          {programs.map(pr=><div key={pr.id} onClick={()=>{getPodFiles(pr.id)}}><Programs  key={pr.id}  id={pr.id} name={pr.name} description ={pr.description}></Programs></div>)}
        </div>
        <div>
       {/*    <Podfiles  podfiles={podFiles}></Podfiles> */}

       {podFiles.map(pf=><Podfiles  key={pf.id}  id={pf.id} title={pf.title} description ={pf.description} url={pf.url}></Podfiles>)}
        
       {nextPage ? <button onClick ={()=>getNext(nextPage)} >Get more podfiles</button> :""} 

        </div>
      </div>
    </React.Fragment>
  );  // end return


  async function getChannels(){

    let data = await fetch("http://api.sr.se/api/v2/channels?format=json&pagination=false");
    data = await data.json();
    setChannels(data.channels);
  
  }

  async function getPrograms(id){
    
    let data = await fetch("http://api.sr.se/api/v2/programs/index?channelid="+id+"&format=json&pagination=false");
    data = await data.json();
    setPrograms(data.programs);
    filterChannels(id);
  
  }

  async function getPodFiles(id){

    let data = await fetch("http://api.sr.se/api/v2/podfiles?programid="+id+"&format=json");
    data = await data.json();
    setPodFiles(data.podfiles);
    setNextPage(data.pagination.nextpage);
    filterPrograms(id);
  }

  async function getNext(url){

    let data = await fetch(url);
    data = await data.json();
    setPodFiles(data.podfiles);
    setNextPage(data.pagination.nextpage);
  }

  function filterChannels(id)
  {
    let filteredChan = channels.filter(c=> c.id===id);
    setChannels(filteredChan);
  }
  function filterPrograms(id)
  {
    let filteredChan = programs.filter(c=> c.id===id);
    setPrograms(filteredChan);
  }


}

export default App;
