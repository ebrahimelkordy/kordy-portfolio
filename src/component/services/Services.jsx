import React from 'react'
import './services.css'
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";



function Services() {
  return (
    <section id='services' >
      <div className='top_section'>
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className='container services_container'>
        <article className='card'>
          <MdDesignServices className='icon' />
          <h3>UI/UX Design</h3>
          <p className='text-light'>I create visually appealing and user-friendly interfaces that enhance user experience.</p>
        </article>
        <article className='card'>
          <IoIosRocket className='icon' />
          <h3>Fast Performance</h3>
          <p className='text-light'>I ensure that your website loads quickly and efficiently, providing a seamless user experience.</p>
        </article>
        <article className='card'>
          <FaCode className='icon' />
          <h3> Clean Code</h3>
          <p className='text-light'>I write clean, efficient, and well-documented code that is easy to maintain and scale.</p>
        </article>
      </div>
    </section>
  )
}

export default Services