import React from 'react'
import Navbar from './Navbar'

export const Header = () => {
    return(
        <div className="header">
            <div className="name">
                <h1>Alexis Chilinski</h1>
                <h3>Software Engineer</h3>
            </div>
            <div>
                <iframe src="https://open.spotify.com/embed/playlist/5cQqTdDQxLMUrI8CklVwwt" width="400" height="100" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
            {/* <Navbar/> */}

        </div>
    )
}