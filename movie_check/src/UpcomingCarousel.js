import React, { Component} from 'react'
import './styles/moviescarousel.css'

class UpcomingCarousel extends Component   {
    constructor() {
        super()
        this.state = {
            arrLength: 0,
            moviesArr: [],
            movieTitles: [],
            test_arr: ["red", "blue", "green"],
            test_color: {
                backgroundColor: "white"
            }
        }
        this.changeColor = this.changeColor.bind(this)
    }
    componentDidMount()
    {
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=93047c7458e1748a6446cbe28f6b02f1&language=en-US&page=1")
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
    changeColor = () => {
        let counter = 0;
        
        const changey = () => {
           this.setState({test_color: this.state.test_arr[counter]})
           counter += 1 
        }
        changey()
    }
    
    render()    {
        console.log(this.state)

        const movies_list = this.state.movieTitles.map((title) => <li key={title} className="Upmovies">{title}</li>)
        return (
            <div className="Carousel-container">
                <div className="UpCarousel">
                    {/*<button onClick={this.loopMovies}/>*/}
                    <ul className="upcoming-movies">
                        {movies_list}
                    </ul>
                    <div className="color-div" styles={this.state.test_color}>
                    <button onClick={this.changeColor}></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpcomingCarousel