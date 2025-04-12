
import "../../index.css"
import "./contacts.css"
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contacts() {
    const form = useRef(null);



    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_l629d9i', 'template_j3y20fg', form.current, {
                publicKey: 'ai-ngqzgQwSDwI12b',
            })
        e.target.reset();

    };

    const ContactData = [
        {
            id: 1,
            icon: <MdOutlineEmail />,
            title: "Email",
            info: "ebrahimkordy0@gmail.com",
            link: "mailto:ebrahimkordy0@gmail.com",
        },
        {
            id: 2,
            icon: <RiMessengerLine />,
            title: "Messenger",
            info: "RedaTech",
            link: "https://m.me/houdareda.99",
        },
        {
            id: 3,
            icon: <BsWhatsapp />,
            title: "WhatsApp",
            info: "01060899732",
            link: "https://api.whatsapp.com/send?phone=201060899732",
        }
    ]
    return (
        <section id='contacts' className='contacts'>


            <div className="top_section">
                <h5>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</h5>
                <h2>Contact Me</h2>
            </div>
            <div className="contact_container  container" >
                <div className="contact_options">
                    {ContactData.map((contact) => {
                        return (
                            <div className="contact_option" key={contact.id}>
                                <span className='contact_icon'>{contact.icon}</span>
                                <h4>{contact.title}</h4>
                                <h5>{contact.info}</h5>
                                <a href={contact.link} target="_blank" rel="noreferrer">Send a message</a>
                            </div>
                        )
                    }
                    )}


                </div>
                <form ref={form} onSubmit={sendEmail}>

                    <input type="text" id="name" name="name" required placeholder='your full name' />


                    <input type="email" id="email" name="email" required placeholder='your email address' />


                    <textarea id="message" name="message" rows={10} required placeholder='put you massege here             '></textarea>

                    <button type="submit" className='btn btn-primary'>Send</button>
                </form>



            </div>
        </section>
    )
}
