import React, { Component } from 'react'
import Slider from "react-slick";
import './styles/backdrop.css'

class Backdrop extends Component {
    constructor()   {
        super()
        this.state = {
            backdropSize: ["w300",
            "w780",
            "w1280",
            "original"],
            posterSize: [
                "w300",
                "w780",
                "w1280",
                "original"
            ],
            backdropList: [
                "http://image.tmdb.org/t/p/w1280//7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
                "http://image.tmdb.org/t/p/w1280//uufTqD2CSn1NqL3cXEl4Vp3bCav.jpg",
                "http://image.tmdb.org/t/p/w1280///yXybBEC45p84D0Ky7GmQQYrclVr.jpg"
            ]
        }
    }

    render()    {
        const settings = {
            dots: false,
            autoplay: true,
            autoplaySpeed: 2700,
            speed: 3400,
            arrows: false,
        }
        const backdrop_image_list = this.state.backdropList.map((link) => <div key={link} className="Backdrop-Images"><img src={link}/></div>)
        return (
            <div className="Backdrop-Container">
                <div classsName='Backdrop'>
                <Slider {...settings}>
                        {backdrop_image_list}
                </Slider>
                </div>
            </div>
        )
    }
}

export default Backdrop