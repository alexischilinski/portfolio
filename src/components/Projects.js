import React from 'react'
import ontrack from './photos/ontrack.png'
import SEAstainability from './photos/seastainability.png'
import starwars from './photos/starwars101.png'

export const Projects = () => {
    return (
        <>
            <h1 className="section-title">Projects</h1>
            <div className="projects">
                <div className="project">
                    <div className="hovering">
                        <a href="https://capstone-ontrack.web.app/" target="_blank"><img className="project-photo" src={ontrack}></img></a>
                        <h1>OnTrack</h1>
                    </div>
                    <p className="project-descrip">A running app that can be used to track progress and connect with other runners while training for a race.</p>
                    <p className="built">Built with:</p>
                    <p className="built-with">React.js, Python, Django, PostgreSQL</p>
                    <a href="https://github.com/alexiscait142/capstone_frontend" target="_blank"><button className="project-icon github"></button></a>
                    <a href="https://www.youtube.com/watch?v=PcETYwyMEkU" target="_blank"><button className="project-icon youtube"></button></a>
                </div>
                <div className="project">
                    <div className="hovering">
                        <a href="https://starwars101mod4.web.app/" target="_blank"><img className="project-photo" src={starwars}></img></a>
                        <h1>Star Wars 101</h1>
                    </div>
                    <p className="project-descrip">An app that provides a fundamental education about the Star Wars Universe.</p>
                    <p className="built">Built with:</p>
                    <p className="built-with">React.js, Python, Django, PostgreSQL</p>
                    <a href="https://github.com/alexiscait142/starwars_frontend_react" target="_blank"><button className="project-icon github"></button></a>
                    <a href="https://www.youtube.com/watch?v=GBVa7aet06U" target="_blank"><button className="project-icon youtube"></button></a>
                </div >
                <div className="project">
                    <div className="hovering">
                        <a href="https://mod3seafood.web.app/" target="_blank"><img className="project-photo" src={SEAstainability}></img></a>
                        <h1>SEAstainability</h1>
                    </div>
                    <p className="project-descrip">A resource for choosing and learning about sustainable seafood.</p>
                    <p className="built">Built with:</p>
                    <p className="built-with">Vanilla Javascript, SVG, Ruby on Rails, PostgreSQL</p>
                    <a href={"https://github.com/alexiscait142/seafood_frontend"} target="_blank"><button className="project-icon github"></button></a>
                    <a href="https://www.youtube.com/watch?v=VJZtAifETGQ" target="_blank"><button className="project-icon youtube"></button></a>
                </div>
            </div>
        </>
    )
}