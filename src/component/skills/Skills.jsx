import React from 'react'
import './skils.css'
import CSS from '../../assets/css3.svg'
import JS from '../../assets/javascript.svg'
import Reacts from '../../assets/react.svg'
import Node from '../../assets/nodejs.svg'
import MongoDB from '../../assets/mongodb.svg'
import Tailwind from '../../assets/tailwindcss.svg'
import Figma from '../../assets/figma.svg'
import JSX from '../../assets/expressjs.svg'

function Skils() {
    const skills = [
        {
            id: 1,
            title: 'CSS3',
            image: CSS,
            disc: "User interface ",
        },
        {
            id: 2,
            image: JS,
            title: 'JavaScript',
            disc: 'Interaction',
        },
        {
            id: 3,
            image: Reacts,
            title: 'React',
            disc: 'Framework',
        },
        {
            id: 4,
            image: Tailwind,
            title: 'TailwindCSS',
            disc: 'User Interface',
        },
        {
            id: 5,
            image: Node,
            title: 'NodeJS',
            disc: 'Web Server',
        },
        {
            id: 6,
            image: Figma,
            title: 'Figma',
            disc: 'Design tool',
        },
        {
            id: 7,
            image: JSX,
            title: 'ExpressJS',
            disc: 'Node Framework',
        },
        {
            id: 8,
            image: MongoDB,
            title: 'MongoDB',
            disc: 'Database',
        }
    ]
    return (
        <section className='skills'>
            <div className='top_section'>
                <h5>What skills I have</h5>
                <h2>My Experience</h2>
            </div>

            <div className='container_skills container'>


                {skills.map(({ id, title, image, disc }) => {
                    return (
                        <article className='card_skill' key={id}>
                            <div className='icon'>
                                <img src={image} alt={title} className='skills_icon' />
                            </div>
                            <div className='content'>
                                <h4>{title}</h4>
                                <small className='text-light'>{disc}</small>
                            </div>
                        </article>
                    )
                })}

            </div>

            {/* <div className='skills_backend'>
                    <h3>Backend Development</h3>
                    <article className='skills_details'>
                        <div className='skills_icon'>
                            <i className='devicon-nodejs-plain colored'></i>
                        </div>
                        <div>
                            <h4>Node JS</h4>
                        </div>
                    </article>
                </div> */}

        </section>
    )
}

export default Skils
