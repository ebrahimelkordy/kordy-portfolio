import React from 'react'
import './foter.css'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <a href="#home" className='footer_logo'>Ebrahim Hashish</a>

            <ul className='permalinks'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contacts">Contact</a></li>
            </ul>

            <div className="footer_socials">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                    <FaLinkedinIn />
                </a>
            </div>

            <div className="footer_copyright">
                <small>&copy; {new Date().getFullYear()} Ebrahim Hashish. All rights reserved.</small>
            </div>
        </footer>
    )
}
