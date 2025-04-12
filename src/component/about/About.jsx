import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import ImageME from "../../assets/me-about.jpg"
function About() {
    return (
        <section className='about' id='about'>
            <div className='top_section'>
                <h5>Get To Know</h5>
                <h2>About Me</h2>
            </div>
            <div className='container about_container'>
                <div className='about_me'>
                    <div className='about_me-img'>
                        <img src={ImageME} alt='About Me' />
                    </div>
                </div>
                <div className='about_content'>
                    <div className='about_cards'>
                        <article className='about_card'>
                            <FaAward className='about_icon' />
                            <h5>Experience</h5>
                            <small>2+ Years Working</small>
                        </article>
                        <article className='about_card'>
                            <FiUsers className='about_icon' />
                            <h5>Clients</h5>
                            <small>50+ Worldwide</small>
                        </article>
                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon' />
                            <h5>Projects</h5>
                            <small>80+ Completed</small>
                        </article>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. QCuisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus.</p>
                    <a href='#contacts' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
