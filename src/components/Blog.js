import React from 'react'
import mixtape from './photos/mixtape.jpg'

export const Blog = () => {
    return(
        <>
            <h1 className="section-title blog-title">Blog</h1>
            <div className="blog-section">
                <div className="blog-description">
                    <h1>Finally Grounded — From a Life at 36,000ft to a Career in Software Engineering</h1>
                    <a href="https://medium.com/@chilinski.a/finally-grounded-from-a-life-at-36-000ft-to-a-career-in-software-engineering-9bdc8b9fb8e6" target="_blank"><img className="blog-photo" src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2549&q=80"></img></a>
                </div>
                <div className="blog-description">
                    <h1>How to seed a Django API with data from an external API</h1>
                    <a href="https://medium.com/@chilinski.a/how-to-seed-a-django-api-with-data-from-an-external-api-b577b6e6ad54" target="_blank"><img className="blog-photo" src="https://images.unsplash.com/photo-1462690417829-5b41247f6b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"></img></a>
                </div>
                <div className="blog-description">
                    <h1>Deleting a record from a join-table without deleting records from other tables - Ruby on Rails</h1>
                    <a href="https://medium.com/@chilinski.a/deleting-a-record-from-a-join-table-without-deleting-records-from-other-tables-ruby-on-rails-1bf832c7a479" target="_blank"><img className="blog-photo" src="https://images.unsplash.com/photo-1526270100824-f033a2377d62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQ1NDExfQ&auto=format&fit=crop&w=3819&q=80"></img></a>
                </div>
                <div className="blog-description">
                    <h1>NPM scripts and concurrently — utilizing Node.js tools</h1>
                    <a href="https://medium.com/@chilinski.a/npm-scripts-and-concurrently-utilizing-node-js-tools-9e91b8c6c1dd" target="_blank"><img className="blog-photo" src="https://images.unsplash.com/photo-1544980919-e17526d4ed0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3451&q=80"></img></a>
                </div>
                <div className="blog-description">
                    <h1>Python: Web-scraping to CSVs</h1>
                    <a href="https://medium.com/analytics-vidhya/django-web-scraping-to-csvs-a1082d41ca64" target="_blank"><img className="blog-photo" src="https://www.corporatecomplianceinsights.com/wp-content/uploads/2018/06/spreadsheet.jpg"></img></a>
                </div>
                <div className="blog-description">
                    <h1>Setting up a Basic Django API</h1>
                    <a href="https://medium.com/swlh/setting-up-a-basic-django-backend-5f0b746717e8" target="_blank"><img className="blog-photo" src="https://i0.wp.com/coding-sessions.com/wp-content/uploads/2020/02/drf_4_api_data_1.png?ssl=1://www.django-rest-framework.org/img/quickstart.png"></img></a>
                </div>
            </div>
        </>
    )
}