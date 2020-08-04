import React from 'react'
import headshot from './photos/headshot.jpg'
import Resume from './photos/AlexisResume.pdf'

export const About = () => {
    return (
        <>
            <h1 className="about-title">About</h1>
            <div className="about">
                {/* <div className="image"></div> */}
                <img className="image" src={headshot}></img>
                <div className="about-blurb">
                    <p>I am a software engineer from Boston, Massachusetts. I build full-stack applications in an array of languages and frameworks including
                        Ruby on Rails, Node, Python, Django, and React.
                        I continue to enhance my engineering expertise by experimenting with different languages and technologies
                        and by working on complex freelance projects.
                    </p>
                    <p>I come from an extensive background in customer service for industries such as airlines and theme parks. In my spare time,
                        you'll most likely find me out for a run, playing guitar, or watching Star Wars.
                    </p>
                </div>
                <ul>
                    <div className="links">
                        <a className="github icon" href={"https://github.com/alexiscait142"} target="_blank"></a>
                        <a className="linkedin icon" href={"https://www.linkedin.com/in/alexis-chilinski/"} target="_blank"></a>
                        <a className="blog icon" href={"https://medium.com/@chilinski.a"} target="_blank"></a>
                    </div>
                </ul>
                <a className="resume" href={Resume} target="_blank">Click Here to View Resume</a>
            </div>
        </>
    )
}