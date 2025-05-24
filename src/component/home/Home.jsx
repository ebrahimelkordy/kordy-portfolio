import React from 'react'
import './home.css'
import "../../index.css"
import Me from '../../assets/me-Photoroom.jpg'
import HomeSocials from './HomeSocials'
import CV from '../../assets/CV.pdf'
function Home() {
    return (
        <section id="home">
            <div className='container home_container '>
                <h4>Hello i’m  </h4>
                <h1>Ebrahim Hashish</h1>
                <h4 className='text-light'>Full Stack Developer</h4>
                <div className="btns">
                    <a href={CV} className='btn' download>Download CV</a>

                    <a href="#contacts" className='btn btn-primary'>Let’s talk</a>
                </div>

                <div className="me">

                    <img src={Me} alt="me" />
                </div>
                <a href="#about" className='scroll_down'>Scroll Down</a>
                <HomeSocials />

            </div>

        </section>
    )
}

export default Home
