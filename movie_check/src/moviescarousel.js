import React, { Component} from 'react'
import './styles/moviescarousel.css'

class MoviesCarousel extends Component   {
    constructor() {
        super()
        this.state = {
            arrLength: 0,
            moviesArr: [],
            movieTitles: [],
            test: [
                {num: 2, id: "Check"},
                {num: 3, id: "This"},
                {num: 4, id: "Out"},
                {num: 5, id: "Dog"}
            ],
            test2: []
        }
        this.loopMovies = this.loopMovies.bind(this)
    }
    componentDidMount()
    {
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=93047c7458e1748a6446cbe28f6b02f1&language=en-US&page=1")
        .then(data => data.json())
        .then(response => {
            this.setState({
            moviesArr: response.results,
            arrLength: response.results.length,
            test2: this.state.test.map((item) => item.id)
        })
        console.log(this.state.test2)
        console.log(this.state)
        })
    }
    loopMovies()
    {
    }
    
    render()    {
    
        return (
            
            <div className="Carousel-container">
                <div className="Carousel">
                    <button onClick={this.loopMovies}/>
                    <ul className="upcoming-movies">
                    
                    </ul>
                </div>
            </div>
        )
    }
}

export default MoviesCarousel