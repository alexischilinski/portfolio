import React, { Component } from 'react'

class Navbar extends Component {
    render(){
        return(
            <div className="navbar">
                <ul>
                    <div className="page-links">
                    <li className="link-to-page">About Me</li>
                    <li className="link-to-page">Projects</li>
                    <li className="link-to-page">Contact</li>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Navbar;