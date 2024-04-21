import React, { useEffect, useState } from 'react'
import { First } from 'react-bootstrap/esm/PageItem';
import Header from './components/Header';
function Lyric  () {

   const [keyword,setKeyword] =  useState("");
   const [isLoading, setisLoading] = useState(false) 
   const [tracks, setTracks] = useState([])

const getTracks = async () => {
    setisLoading(true)
    let  data = await fetch(`https://v1.nocodeapi.com/apienjoyer/spotify/RHItGXtHupxBcUke/search?type=track&q=${keyword ===""?"trending":keyword  }daku`)
    let convertedData = await data.json()
    console.log(convertedData.tracks.items);
    setTracks(convertedData.tracks.items);
   setisLoading(false)
};



    return(
        <div>
    <Header/>
        <nav className="navbar navbar-dark bg-light justify-content-between bg-dark ">
        <a className="navbar-brand">Lyrics search</a>
          <input
          value={keyword}
          onChange = {event => setKeyword(event.target.value)}
            className="form-control me-2 w-75"
            type="search" 
            placeholder="Search"
            aria-label="Search"
          />
          <button onClick={getTracks} className="btn btn-outline-success my-2 my-sm-0" >
            Search
          </button>
        
        <div className="contain">
            <div className= "row">
            <div className='col-12 '> 
            
            </div>
            <div className='col-lg-3 col-md-6'>
            </div>
            {
                tracks.map((element) =>{
                    return (
                         <div key ={element.id} className="col-lg-3 col-md-6 py-2">
                        
                        <div className="card" >
  <img className="card-img-top" src={element.album.images[0].url} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{element.name}</h5>
    <p className="card-text">
    Artists: {element.album.artists[0].name}
    </p>
    <p className="card-text">
    Release date: {element.album.release_date}
    </p>
      <audio src = {element.preview_url}controls className = "w-100">
    </audio>
  </div>
</div>

                    </div>
                    );
                })}
            </div>
            <div className='row'>
                
            </div>
        </div>
      </nav>
      
      </div>
    )
}

export default Lyric