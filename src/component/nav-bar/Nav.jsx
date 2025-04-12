import React, { useState } from 'react'
import './nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

function Nav() {
    const [activeNav, setActiveNav] = useState('#home');

    return (
        <nav>
            <a href="#home"
                onClick={() => setActiveNav('#home')}
                className={activeNav === '#home' ? 'active' : ''}>
                <IoHomeOutline />
            </a>
            <a href="#about"
                onClick={() => setActiveNav('#about')}
                className={activeNav === '#about' ? 'active' : ''}>
                <LuUserRound />
            </a>
            <a href="#services"
                onClick={() => setActiveNav('#services')}
                className={activeNav === '#services' ? 'active' : ''}>
                <RiServiceLine />
            </a>
            <a href="#projects"
                onClick={() => setActiveNav('#projects')}
                className={activeNav === '#projects' ? 'active' : ''}>
                <BiBook />
            </a>
            <a href="#contacts"
                onClick={() => setActiveNav('#contacts')}
                className={activeNav === '#contacts' ? 'active' : ''}>
                <BiMessageSquareDetail />
            </a>
        </nav>
    )
}

export default Nav