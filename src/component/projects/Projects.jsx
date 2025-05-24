import React from 'react';
import './projects.css';
import IMG1 from '../../assets/project-1.png';
import IMG2 from '../../assets/project2.png';
import IMG3 from '../../OIP.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

function Projects() {

    const projects = [{
        id: 1,
        image: IMG1,
        title: '7aseb for managing products',
        github: 'https://ebrahimelkordy.github.io/managing.products/',
        demo: 'https://demo1.com'
    },
    {
        id: 2,
        image: IMG2,
        title: 'athar for prayers times',
        github: 'https://ebrahimelkordy.github.io/athar/',
        demo: 'https://demo2.com'
    },
    {
        id: 3,
        image:IMG3,
        title: 'siraj chat app',
        github: '#',
        demo: 'https://demo3.com'
    },
    // {
    //     id: 4,
    //     image: IMG4,
    //     title: 'Portfolio Item 4',
    //     github: 'https://github.com/project4',
    //     demo: 'https://demo4.com'
    // },
    // {
    //     id: 5,
    //     image: IMG5,
    //     title: 'Portfolio Item 5',
    //     github: 'https://github.com/project5',
    //     demo: 'https://demo5.com'
    // },
    // {
    //     id: 6,
    //     image: IMG6,
    //     title: 'Portfolio Item 6',
    //     github: 'https://github.com/project6',
    //     demo: 'https://demo6.com'
    // }
    ];

    return (
        <section id="projects">
            <div className="projects">

                <h5>My Recent Work</h5>
                <h2 >Projects</h2>

                {/* Loop through the projects array and display each project */}
                <div className="container projects-container">
                    {projects.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className="portfolio_item">
                                <div className="portfolio_item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="project-item_btns">
                                    <a href={github} className="btn">GitHub</a>
                                    {/* <a href={demo} className="btn btn-primary">Live Demo</a> */}
                                </div>
                            </article>
                        );
                    })}


                    {/* Add more projects as needed */}
                </div>

            </div>
        </section>
    );
}

export default Projects;
