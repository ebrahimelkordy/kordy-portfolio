import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function HomeSocials() {
    return (
        <div className="home_socials">
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>
    )
}

export default HomeSocials
