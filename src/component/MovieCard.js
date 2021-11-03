import react from 'react';
import StarRating from './StarRating';
const movieCard=props=>{
return(
     /* <iframe  className="video" src={props.movie.posterURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/
    <div className='cardContainer'>
        <div>
           <img className="filmCard" src={props.movie.posterURL}/>

        </div>
        <div className='row'>
        <h1>{props.movie.title}</h1>
        </div>
        <div className='row'>
        <p>{props.movie.description}</p>
        </div>
        <div className='row'>
        </div>
        <div className='row'>
        <StarRating rating={props.movie.rating}></StarRating>
        </div>
        
     </div>
)
}
export default movieCard;