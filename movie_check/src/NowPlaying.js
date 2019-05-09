import React, { Component } from 'react'
import './styles/moviescarousel.css'

class NowPlaying extends Component   {
    constructor() {
        super()
        this.state = {
            arrLength: 0,
            moviesArr: [],
            movieTitles: []
        }
        //this.loopMovies = this.loopMovies.bind(this)
    }
    componentDidMount()
    {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=93047c7458e1748a6446cbe28f6b02f1&language=en-US&page=1")
        .then(data => data.json())
        .then(response => {
            this.setState({
            moviesArr: response.results,
            arrLength: response.results.length,
            movieTitles: response.results.map((item) => item.original_title)
        })
        console.log(this.state)
        })
    }
    
    render()    {
        const movies_list = this.state.movieTitles.map((title) => <li key={title} className="Playmovies">{title}</li>)
        return (
            
            <div className="Playing-container">
                <div className="PlayingCarousel">
                    {/*<button onClick={this.loopMovies}/>*/}
                    <ul className="Playing-movies">
                        {movies_list}
                    </ul>
                </div>
            </div>
        )
    }
}

export default NowPlaying