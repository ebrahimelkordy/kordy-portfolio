import './index.css'
import Home from './component/home/Home'
import About from './component/about/About'
import Contacts from './component/contacts/Contacts'
import Nav from './component/nav-bar/Nav'
import Skills from './component/skills/Skills'
import Services from './component/services/Services'
import Footer from './component/footer/Footer'
import Projects from './component/projects/Projects'

function App() {
    return (
        <div>
            <Home />
            <About />
            <Services />
            <Skills />
            <Projects />
            <Contacts />



            <Footer />
            <Nav />
        </div>
    )
}

export default App
