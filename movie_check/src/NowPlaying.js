import React, { Component } from 'react'
import Slider from "react-slick";
import './styles/moviescarousel.css'

class NowPlaying extends Component   {
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
        fetch("https://api.tmdb.org/3/movie/now_playing?api_key="+ api + "=1")
        .then(data => data.json())
        .then(response => {
            this.setState({
            moviesArr: response.results,
            arrLength: response.results.length,
            movieTitles: response.results.map((item) => item.original_title)
        })
        })
    }
                            //image size    //poster link
                            //    |         //    |
                            //    |         //    |
                            //   \ /        //   \ /
    //http://image.tmdb.org/t/p/w125//or06FN3Dka5tukK1e9sl16pB3iy.jpg


    render()    {
        var settings = {
            slidesToShow: 7,
            slidesToScroll: 2,
            speed: 800,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: true,
          }
        const movies_list = this.state.movieTitles.map((title) => <div key={title} className="Playmovies"><h3>{title}</h3></div>)
        return (
            
            <div className="Playing-container">
                <div className="PlayingCarousel">
                    <Slider {...settings}>
                        {movies_list}
                    </Slider>
                </div>
            </div>
        )
    }
}

export default NowPlaying