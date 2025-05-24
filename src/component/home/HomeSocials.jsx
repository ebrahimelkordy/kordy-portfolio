import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function HomeSocials() {
    return (
        <div className="home_socials">
            <a href="https://github.com/ebrahimelkordy" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="www.linkedin.com/in/ebrahim-elkordy-3a104b214" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://x.com/ebrahimkordy" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>
    )
}

export default HomeSocials
