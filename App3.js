import { useEffect, useState } from "react";

function Movie() {
    const [movie, setQuote] = useState('')
    const [render, setRender] = useState(true);

    useEffect(() => {
        const getStuff = async () => {
            const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=c967d94b')
            const json = await response.json();
            console.log(json);
            setQuote(json)
        }

        getStuff()
    }, [render])

    return (
<div class="card">
  <div class="row g-0">
    <div class="col-5 col-sm-4">
      <img src={movie.Poster} class="img-fluid w-100" alt="card-horizontal-image"></img>
    </div>
    <div class="col-7 col-sm-8">
      <div class="card-body">
        <h5 class="card-title">Release Date: {movie.Year} Rated: {movie.Rated}</h5>
        <p class="card-text">{movie.Title}</p>
        <p class="card-text"><small class="text-muted">Genre: {movie.Genre}</small></p>
      </div>
    </div>
  </div>
</div>
    )
}

export default Movie