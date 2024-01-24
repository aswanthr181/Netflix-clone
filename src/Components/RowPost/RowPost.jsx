import React,{useEffect,useState} from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'

function RowPost(props) {
  const [movies,setMovies]=useState([])
  const [url,setUrlId]=useState('')
  const [showVideo,setShowVideo]=useState(true)
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data);
      setMovies(response.data.results)
    }).catch(err=>{
      alert('network err')
    })
  }, [])
  
  const opts = {
    
    playerVars: {
    height: '130px',
    width: '230px',
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log('sdfghj',response.data.results[0]);
      if(response.data.results.length!==0){
        setUrlId({movieId : id , Vid : response.data.results[0].key})
        if(showVideo===false){
          setShowVideo(true)
        }
      }
    })
  }

  const closeYoutube=()=>{
    setShowVideo(false)
  }
  return (
//     <div className='row row1'>
//         <h2>{props.title}</h2>
//         <div className='posters'>
//           {
//             movies.map((obj)=>

            
//             <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} src={`${movies?imageUrl+obj.backdrop_path:""}`} alt="poster" />
//           )}
//             <div className="scroll-right"> x </div>
//         </div>

//         {  urlId &&  <YouTube videoId={urlId.key} opts={opts} />   }
//     </div>
//   )

<div className='row row1'>
<h2>{props.title}</h2>
<div className='posters'>
  {movies.map((obj) => (
    
    <div key={obj.id} className={`poster-container ${obj.id}`}>
      
      
      {url.movieId === obj.id && showVideo ? (

        <div className='youtube'>
          <YouTube videoId={url.Vid} opts={opts} />
          <button className='closeButton' onClick={closeYoutube}>X</button>
        </div>
        
      ) : (
        <img
          onClick={() => handleMovie(obj.id)}
          className={props.isSmall ? 'smallPoster' : 'poster'}
          src={`${movies ? imageUrl + obj.backdrop_path : ''}`}
          alt='poster'
        />
      )}
    </div>
  ))}
  <div className='scroll-right'>x</div>
</div>
</div>
);
      }

export default RowPost