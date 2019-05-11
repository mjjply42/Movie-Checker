import React, { Component} from 'react'
import Slider from "react-slick";
import Test from './test'
import './styles/moviescarousel.css'

class UpcomingCarousel extends Component   {
    constructor() {
        super()
        this.state = {
            arrLength: 0,
            moviesArr: [],
            movieTitles: []
        }
    }
    componentDidMount()
    {
        let api = "93047c7458e1748a6446cbe28f6b02f1&language=en-US&page"
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key="+ api + "=1")
        .then(data => data.json())
        .then(response => {
            this.setState({
            moviesArr: response.results,
            arrLength: response.results.length,
            movieTitles: response.results.map((item) => item.original_title)
        })
        })    
    }
    
    render()    {
        var settings = {
            slidesToShow: 7,
            slidesToScroll: 2,
            speed: 800,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: true,
          }
        const movies_list = this.state.movieTitles.map((title) => <div key={title} className="Upmovies"><h3>{title}</h3></div>)
        return (
            <div className="Carousel-container">
                <div className="UpCarousel">
                    <Slider {...settings}>
                        {movies_list}
                    </Slider>
                </div>
                <div className="test">
                    <Test array={this.state.movieTitles}/>
                </div>
            </div>
        )
    }
}

export default UpcomingCarousel