import React, { Component} from 'react'
import './styles/header.css'

class Header extends Component {



    render()
    {
        return (
        <div className="Head_container">
            <div className="Header">
                <nav className="navbar navbar-dark bg-dark">
                    <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="search btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
            </div>
        </div>
    )
    }
}

export default Header